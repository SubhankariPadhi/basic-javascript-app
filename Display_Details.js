function init(){
    window.alert("anything");
    var fname =sessionStorage.getItem("firstName");
    document.getElementById('fn_disp_id').innerText = fname;
    var lname =sessionStorage.getItem("lastName");
    document.getElementById('ln_disp_id').innerText = lname;

    var dt =sessionStorage.getItem("dob");
    document.getElementById('dob_disp_id').innerText = dt;

    var email =sessionStorage.getItem("emailId");
    document.getElementById('em_disp_id').innerText = email;

    var psw =sessionStorage.getItem("password");
    document.getElementById('psw_disp_id').innerText = psw;

    var cpswd =sessionStorage.getItem("cpsw");
    document.getElementById('cpswd_disp_id').innerText = cpswd;

}