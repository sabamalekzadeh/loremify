$(document).ready(function(){
    console.log('Hello to Jquery!');
    $('.produce_text').click(function(){
        var lorem = new Array();
        if($("#farsi").prop("checked")){
            lorem[0] = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' ;
        }
        if($("#english").prop("checked")){
            lorem[0] = "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental";
        }
        
        var selected = $('.textOption').find(":selected").val();
        var number = $('.number').val();
        
        if(number.length > 0 && selected.length > 0) {
            
            var temp = '';
            var n = 0;
            var res = 0;
    
            if(selected == 'paragraph'){
                for(var x=0 ;x< number;x++){
                    temp += lorem[0]
                    temp += '\n\n'
                }
            }
    
            if(selected == 'char'){
                var charNumber = lorem[0].length;
                if(number > charNumber ) {
                    do {
                        number = number - charNumber;
                        res = number;
                        n++;
                    } while (lorem[0].length < res);
            
                    for(var x=0;x<n;x++){
                        temp += lorem[0]
                        temp += '\n\n'
                    }
            
                    var tmArr = lorem[0].split('',res);
                    tmString = tmArr.join('');
                    temp += tmString
                }
    
                else {
                    var tmArr = lorem[0].split('',number);
                    tmString = tmArr.join('');
                    temp += tmString
                }
            }
    
            if(selected == 'word'){
                var wordNumber = lorem[0].split(' ').length;
                if(wordNumber < number) {
                    do {
                        number = number - wordNumber;
                        res = number;
                        n++;
                    } while (wordNumber < res);
            
                    for(var x=0;x<n;x++){
                        temp += lorem[0]
                        temp += '\n\n'
                    }
            
                    var tmArr = lorem[0].split(' ',res);
                    tmString = tmArr.join(' ');
                    temp += tmString
                }        
                
                else {
                    var tmArr = lorem[0].split(' ',number);
                    tmString = tmArr.join(' ');
                    temp += tmString
                }
            }
    
            if(selected == "sentence") {
                var sentenceNumber = lorem[0].split('.').length;
    
                if(sentenceNumber < number) {
    
                    do {
                        number = number - sentenceNumber;
                        res = number;
                        n++;
                    } while( sentenceNumber < res );
            
                    for(var x=0;x<n;x++){
                        temp += lorem[0]
                        temp += '\n\n'
                    }
            
                    var tmArr = lorem[0].split('.',res);
                    tmString = tmArr.join('.');
                    temp += tmString
                } else {
                    var tmArr = lorem[0].split('.',number);
                    tmString = tmArr.join('.');
                    temp += tmString
                }
    
            }
    
            $('.textareaInfo').empty();
            $('.textareaInfo').append(temp);
        }

        else {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": true,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr.error('لطفا تعداد را وارد نمایید!')
        }
        
    })
})