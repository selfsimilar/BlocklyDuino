var filepath = { media: '../../media/', msg_ja:"../../msg/js/ja.js", msg_en: "../../msg/js/en.js", msg_ja_kids: "../../msg/js/ja_kids.js"};

(function(){
  var html = "";
  html += '<meta charset="utf-8">';
  html += '<link rel="stylesheet" type="text/css" href="css/style.css">';
  html += '<title>BlocklyDuino</title>';

  html += '<script type="text/javascript" src="js/aws-sdk-2.2.4.min.js"></script>';
  html += '<script type="text/javascript" src="js/s3.js"></script>';

  html += '<script type="text/javascript" src="../../blockly_uncompressed.js"></script>';

  // this next one is replaced by just looking for the arduino generator file
  // html += '<script type="text/javascript" src="../../arduino_compressed.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino.js"></script>';
  
  // note: replace following line with this monstrosity to avoid compiling during offline usage
    // html += '<script type="text/javascript" src="../../blocks_compressed.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/aerobot.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/array.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/base.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/blynk.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/cast.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/colour.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/dht.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/ethernet.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/grove.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/ht1632_matrix.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/i2c_matrix.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/i2c_sevenseg.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/ifttt.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/initializes.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/inout.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/interrupts.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/involt.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/ir_remote.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/lcd.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/logic.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/loops.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/m2x.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/math.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/mpr121.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/neopixel.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/procedures.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/rgbled.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/serial.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/servo.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/shield_bot.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/text.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/times.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/ultrasonic.js"></script>';
  html += '<script type="text/javascript" src="../../blocks/variables.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/aerobot.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/array.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/base.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/blynk.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/cast.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/control.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/dht.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/ethernet.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/grove.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/ht1632_matrix.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/i2c_matrix.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/i2c_sevenseg.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/ifttt.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/initializes.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/inout.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/interrupts.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/involt.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/ir_remote.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/lcd.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/logic.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/m2x.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/math.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/mpr121.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/neopixel.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/procedures.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/rgbled.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/serial.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/servo.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/shield_bot.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/text.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/times.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/ultrasonic.js"></script>';
  html += '<script type="text/javascript" src="../../generators/arduino/variables.js"></script>';
  // that's over
  // back to normal
  html += '<script type="text/javascript" src="../../msg/js/en.js"></script>';
  html += '<script type="text/javascript" src="js/Blob.js"></script>';
  html += '<script type="text/javascript" src="js/spin.js"></script>';
  html += '<script type="text/javascript" src="js/FileSaver.min.js"></script>';
  html += '<script type="text/javascript" src="js/blockly_helper.js"></script>';
  html += '<script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>';
  html += '<script type="text/javascript" src="js/materialize.min.js"></script>';
  html += '<script type="text/javascript" src="js/jquery.xdomainajax.js"></script>';
  html += '<script type="text/javascript" src="js/jquery.cookie.js"></script>';
  html += '<script type="text/javascript" src="js/setCategoryCharacter.js"></script>';
  html += '<script type="text/javascript" src="js/init.js"></script>';
  html += '<script type="text/javascript" src="js/my_materialize.js"></script>';
  html += '<script type="text/javascript" src="js/ZeroClipboard.js"></script>';
  document.write(html);
})();
