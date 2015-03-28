var filepath = { media: '../../media/', msg_ja:"../../msg/js/ja.js", msg_en: "../../msg/js/en.js", msg_ja_kids: "../../msg/js/ja_kids.js"};

(function(){
  var html = "";
  html += '<meta charset="utf-8">';
  html += '<link rel="stylesheet" type="text/css" href="style.css">';
  html += '<title>BlocklyDuino</title>';
  html += '<script type="text/javascript" src="../../blockly_compressed.js"></script>';
  html += '<script type="text/javascript" src="../../blocks_compressed.js"></script>';
  html += '<script type="text/javascript" src="../../arduino_compressed.js"></script>';
  html += '<script type="text/javascript" src="../../msg/js/en.js"></script>';
  html += '<script type="text/javascript" src="Blob.js"></script>';
  html += '<script type="text/javascript" src="spin.js"></script>';
  html += '<script type="text/javascript" src="FileSaver.min.js"></script>';
  html += '<script type="text/javascript" src="blockly_helper.js"></script>';
  html += '<script type="text/javascript" src="jquery-1.11.2.min.js"></script>';
  html += '<script type="text/javascript" src="jquery.xdomainajax.js"></script>';
  html += '<script type="text/javascript" src="jquery.cookie.js"></script>';
  html += '<script type="text/javascript" src="compilerflasher.js"></script>';
  html += '<script type="text/javascript" src="init.js"></script>';
  html += '<script type="text/javascript" src="ZeroClipboard.js"></script>';

  document.write(html);
})();
