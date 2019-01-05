const path = require('path');
const url = require('url');
const md5 = require('md5');
const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const Image = mongoose.model('Image');

exports.home = (req, res) => {
    res.render(path.join(__dirname,'../static/views/index.ejs'));
}

exports.parseUrl = (req,res,next) => {
    let size = req.params.size.split("X" || "x");
    if(size.length == 2) {
        let color = req.params.color;
        let background = req.params.background;
        let text = req.params.text;
    
        if(req.params.color === undefined && req.params.background === undefined && req.params.text === undefined) {
            req.body.width = size[0]
            req.body.height = size[1];
            req.body.color = '#fff';
            req.body.background = "#252525";
            req.body.text = `${size[0]} X ${size[1]}`;
    
            next();
        } else if(req.params.background === undefined && req.params.text === undefined && req.params.color) {
            req.body.width = size[0]
            req.body.height = size[1];
            req.body.color = `#${color}`;
            req.body.background = "#252525";
            req.body.text = `${size[0]} X ${size[1]}`;
            next();
        } else if(req.params.text === undefined && req.params.color && req.params.background) {
            req.body.width = size[0]
            req.body.height = size[1];
            req.body.color = `#${color}`;
            req.body.background = `#${background}`;
            req.body.text = `${size[0]} X ${size[1]}`;
            next();
        } else {
            req.body.width = size[0]
            req.body.height = size[1];
            req.body.color = `#${color}`;
            req.body.background = `#${background}`;
            req.body.text = text;
            next();
        }
    } else {
        res.render(path.join(__dirname,'../static/views/404.ejs'))
    }
}

exports.findImage = async (req,res , next) => {
    const hash = md5(req.body.width + req.body.height + req.body.color + req.body.background + req.body.text);
    req.body.hash = hash;
    const img = await Image.findOne({hash});
    if(img) {
        res.sendFile(path.join(__dirname,`../static/imgs/${img.hash}.png`));
    }
    else {
        next();
    }
};

exports.makeImage = async (req,res,next) => {
    const div = `
    <div style="
    font-family : sans-serif;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    background-color : ${req.body.background};
    color : ${req.body.color};
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;">
        <h1 style="flex:1">${req.body.text}</h1>
    </div>`;

    const PathToImage = path.join(__dirname,`../static/imgs/${req.body.hash}.png`);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(div);
    await page.setViewport({width : parseInt(req.body.width),height : parseInt(req.body.height)});
    await page.screenshot({path: PathToImage });
    await browser.close();

    req.body.path = PathToImage;
    next();

};

exports.saveImage = async (req,res,next) => {
    let newImage = new Image({
        hash : req.body.hash
    });

    await newImage.save(function(err,result) {
        if(err) {
            console.log('somthing went wrrong!');
            return ;
        }
        next();
    })

    return ;
}

exports.redirectImage = (req, res) => {
    res.sendFile(req.body.path);
};

exports.notFound = (req,res) => {
    res.render(path.join(__dirname,'../static/views/404.ejs'))
}