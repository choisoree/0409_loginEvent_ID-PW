$(function(){

    // 엔터키 눌렀을때
    document.onkeyup = fnEnterchk;

    function fnEnterchk(){
        var Keycode = window.event.keyCode;
//        alert("code : "+code); 엔터키 코드 :13
        if(Keycode==13){
            fnSubmit();
        }
    }

    function fnSubmit(){
         var uID=$("#uID").val().trim();
        // trim() - 입련된 ID value 가져오기 및 공백제거(스페이스바,매서드 체인적용)
            var uPW =$("#uPW").val().trim();

            var regExpID= /[^a-z|A-Z|0-9|_]/;
            var regExpPW= /[^a-z|A-Z|0-9|_#]/;
//            var chkReg = /[^a-z|A-Z|0-9|_]/;
//            var regExp= /[^a-z|A-Z|0-9|_#]/;

            if(uID==""||regExpID.test(uID)){
                alert("아이디를 올바르게 입력해주세요.");
                $("#uID").focus().val(""); //포커스, 공백 제거

            } else if(uPW==""||regExpPW.test(uPW)){
                alert("비밀번호를 올바르게 입력해주세요.");
                $("#uPW").focus().val("");

            } else {
                    alert("ok");
            }
    }


    //버튼 눌렀을때
    $("button").click(function(){
        var uID=$("#uID").val().trim();
        // trim() - 입련된 ID value 가져오기 및 공백제거(스페이스바,매서드 체인적용)
            var uPW =$("#uPW").val().trim();

            var regExpID= /[^a-z|A-Z|0-9|_]/;
            var regExpPW= /[^a-z|A-Z|0-9|_#]/;
//            var chkReg = /[^a-z|A-Z|0-9|_]/;
//            var regExp= /[^a-z|A-Z|0-9|_#]/;

            if(uID==""||regExpID.test(uID)){
                alert("아이디를 올바르게 입력해주세요.");
                $("#uID").focus().val(""); //포커스, 공백 제거

            } else if(uPW==""||regExpPW.test(uPW)){
                alert("비밀번호를 올바르게 입력해주세요.");
                $("#uPW").focus().val("");

            } else {
                    alert("ok");
            }


    });

});
