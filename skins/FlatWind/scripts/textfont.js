//---------Language-----------
var lang = window.GetProperty("Language", "auto").toLowerCase()
if (lang != "cn" && lang != "en")
	lang = (fb.TitleFormat("$meta()").Eval(true)=="[Î´Öªº¯Êý]") ? "cn" : "en";

// Textformat
var DT_LEFT = 0x00000000;
var DT_CENTER = 0x00000001;
var DT_RIGHT = 0x00000002;
var DT_TOP = 0x00000000;
var DT_VCENTER = 0x00000004;
var DT_BOTTOM = 0x00000008;
var DT_SINGLELINE = 0x00000020;
var DT_NOCLIP = 0x00000100;
var DT_CALCRECT = 0x00000400;
var DT_END_ELLIPSIS = 0x00008000;
var DT_NOPREFIX = 0x00000800;
DT_PATH_ELLIPSIS = 0x00004000;
DT_WORD_ELLIPSIS = 0x00040000;

//-----get CUI font
function GetFontName(){
    var fn = fb.TitleFormat(window.GetProperty("Display.Font.Name", "")).Eval(true);
    if(!utils.CheckFont(fn)){
        var font = window.GetFontCUI(0);
        fn = font ? font.Name : "Microsoft Yahei";
        font.Dispose();
    }
    return fn;
}

function GetFontStyle(){
    var fs = fb.TitleFormat(window.GetProperty("Display.Font.Style", "")).Eval(true);
    if(fs==""){
        var font = window.GetFontCUI(0);
        fs = font ? font.Style : 0;
        font.Dispose();
    } else
        fs = Number(fs);
    return fs;
}
