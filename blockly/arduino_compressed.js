// Do not edit this file; automatically generated by build.py.
"use strict";

Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_NONE=99;
var profile={arduino:{description:"Arduino standard-compatible board",digital:[["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],pwm:[["3","3"],["5","5"],["6","6"],["9","9"],["10","10"],["11","11"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5",
"A5"]],serial:9600,tone:[["C:\u30c9","262"],["D:\u30ec","294"],["E:\u30df","330"],["F:\u30d5\u30a1","349"],["G:\u30bd","392"],["A:\u30e9","440"],["B:\u30b7","494"],["C:\u30c9","523"]]},arduino_mega:{description:"Arduino Mega-compatible board"}};profile["default"]=profile.arduino;
Blockly.Arduino.init=function(a){Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.setups_=Object.create(null);Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);for(var c=0;c<a.length;c++)b[c]="int "+Blockly.Arduino.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE)+";\n";Blockly.Arduino.definitions_.variables=b.join("\n")};
Blockly.Arduino.finish=function(a){a="  "+a.replace(/\n/g,"\n  ");a=a.replace(/\n\s+$/,"\n");a="void loop() \n{\n"+a+"\n}";var b=[],c=[],d;for(d in Blockly.Arduino.definitions_){var e=Blockly.Arduino.definitions_[d];e.match(/^#include/)?b.push(e):c.push(e)}e=[];for(d in Blockly.Arduino.setups_)e.push(Blockly.Arduino.setups_[d]);return(b.join("\n")+"\n\n"+c.join("\n")+"\nvoid setup() \n{\n  "+e.join("\n  ")+"\n}\n\n").replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};
Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,b){if(null===b)return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Arduino.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Arduino.allNestedComments(d))&&(c+=Blockly.Arduino.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Arduino.blockToCode(e);return c+
b+e};Blockly.Arduino.base={};Blockly.Arduino.base_delay=function(){return"delay("+(Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000")+");\n"};Blockly.Arduino.base_map=function(){var a=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_NONE),b=Blockly.Arduino.valueToCode(this,"DMAX",Blockly.Arduino.ORDER_ATOMIC);return["map("+a+", 0, 1024, 0, "+b+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.inout_buildin_led=function(){var a=this.getFieldValue("STAT");Blockly.Arduino.setups_.setup_output_13="pinMode(13, OUTPUT);";return"digitalWrite(13, "+a+");\n"};Blockly.Arduino.inout_digital_write=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+", "+b+");\n"};
Blockly.Arduino.inout_digital_read=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.inout_analog_write=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"NUM",Blockly.Arduino.ORDER_ATOMIC);return"analogWrite("+a+", "+b+");\n"};Blockly.Arduino.inout_analog_read=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.inout_highlow=function(){return["HIGH"==this.getFieldValue("BOOL")?"HIGH":"LOW",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.pulsein=function(){var a=this.getFieldValue("pin"),b=Blockly.Arduino.valueToCode(this,"timeout",Blockly.Arduino.ORDER_ATOMIC)||"-1",c="HIGH"==this.getFieldValue("type")?"HIGH":"LOW";console.log(b);Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", INPUT);";return[0<b?"pulseIn("+a+","+c+","+b+")":"pulseIn("+a+","+c+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.tone=function(){var a=this.getFieldValue("pin"),b=Blockly.Arduino.valueToCode(this,"freq",Blockly.Arduino.ORDER_ATOMIC)||"262",c=Blockly.Arduino.valueToCode(this,"duration",Blockly.Arduino.ORDER_ATOMIC)||"1000";return"tone("+a+","+b+","+c+");\n"};
Blockly.Arduino.servo_move=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"DEGREE",Blockly.Arduino.ORDER_ATOMIC),c=Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000";Blockly.Arduino.definitions_.define_servo="#include <Servo.h>\n";Blockly.Arduino.definitions_["var_servo"+a]="Servo servo_"+a+";\n";Blockly.Arduino.setups_["setup_servo_"+a]="servo_"+a+".attach("+a+");\n";return"servo_"+a+".write("+b+");\ndelay("+c+");\n"};
Blockly.Arduino.servo_read_degrees=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.definitions_.define_servo="#include &lt;Servo.h&gt;\n";Blockly.Arduino.definitions_["var_servo"+a]="Servo servo_"+a+";\n";Blockly.Arduino.setups_["setup_servo_"+a]="servo_"+a+".attach("+a+");\n";return"servo_"+a+".read()"};Blockly.Arduino.loops={};
Blockly.Arduino.controls_for=function(){var a=Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.Arduino.valueToCode(this,"FROM",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",c=Blockly.Arduino.valueToCode(this,"TO",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",d=Blockly.Arduino.statementToCode(this,"DO");Blockly.Arduino.INFINITE_LOOP_TRAP&&(d=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+d);if(b.match(/^-?\d+(\.\d+)?$/)&&c.match(/^-?\d+(\.\d+)?$/))var e=
parseFloat(b)<=parseFloat(c),d="for (int "+a+" = "+b+"; "+a+(e?" <= ":" >= ")+c+"; "+a+(e?"++":"--")+") {\n"+d+"}\n";else d="",e=b,b.match(/^\w+$/)||b.match(/^-?\d+(\.\d+)?$/)||(e=Blockly.Arduino.variableDB_.getDistinctName(a+"_start",Blockly.Variables.NAME_TYPE),d+="int "+e+" = "+b+";\n"),b=c,c.match(/^\w+$/)||c.match(/^-?\d+(\.\d+)?$/)||(b=Blockly.Arduino.variableDB_.getDistinctName(a+"_end",Blockly.Variables.NAME_TYPE),d+="int "+b+" = "+c+";\n"),d+="for ("+a+" = "+e+";\n    ("+e+" <= "+b+") ? "+
a+" <= "+b+" : "+a+" >= "+b+";\n    "+a+" += ("+e+" <= "+b+") ? 1 : -1) {\n"+branch0+"}\n";return d};Blockly.Arduino.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Arduino.valueToCode(a,"BOOL",Blockly.Arduino.ORDER_NONE)||"false",d=Blockly.Arduino.statementToCode(a,"DO"),d=Blockly.Arduino.addLoopTrap(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.Arduino.controls_repeat=function(a){var b=Number(a.getFieldValue("TIMES")),c=Blockly.Arduino.statementToCode(a,"DO"),c=Blockly.Arduino.addLoopTrap(c,a.id);a=Blockly.Arduino.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE);return"for (int "+a+" = 0; "+a+" < "+b+"; "+a+"++) {\n"+c+"}\n"};Blockly.Arduino.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};Blockly.Arduino.grove={};Blockly.Arduino.grove_led=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_green_led_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};Blockly.Arduino.grove_button=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_button_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_rotary_angle=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_tilt_switch=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_tilt_switch_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_piezo_buzzer=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_piezo_buzzer_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};Blockly.Arduino.grove_relay=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_relay_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+","+b+");\n"};
Blockly.Arduino.grove_temporature_sensor=function(){var a=this.getFieldValue("PIN");return["round((1/(log((float)(1023-analogRead("+a+"))*10000/analogRead("+a+"))/10000)/3975+1/298.15)-273.15)",Blockly.Arduino.ORDER_ATOMIC]};
var _get_next_pin=function(a){var b=a,b=parseInt(b)?parseInt(a)+1:"A"+(parseInt(b.slice(1,b.length))+1);a=profile["default"].digital.length;for(var c=!0,d=0;d<a;d++)profile["default"].digital[d][1]==b&&(c=!1);return c?(alert("Grove Sensor needs PIN#+1 port, current setting is out of bound."),null):b};
Blockly.Arduino.grove_serial_lcd_print=function(){var a=this.getFieldValue("PIN"),b=Blockly.Arduino.valueToCode(this,"TEXT",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"''",c=Blockly.Arduino.valueToCode(this,"TEXT2",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"''",d=Blockly.Arduino.valueToCode(this,"DELAY_TIME",Blockly.Arduino.ORDER_ATOMIC)||"1000";Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var e=
_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd_"+a]="SerialLCD slcd_"+a+"("+a+","+e+");\n";Blockly.Arduino.setups_["setup_lcd_"+a]="slcd_"+a+".begin();\n";e="slcd_"+a+".backlight();\n"+("slcd_"+a+".setCursor(0,0);\n");e+="slcd_"+a+".print("+b+");\n";e+="slcd_"+a+".setCursor(0,1);\n";e+="slcd_"+a+".print("+c+");\n";return e+="delay("+d+");\n"};
Blockly.Arduino.grove_serial_lcd_power=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var c=_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd"+a]="SerialLCD slcd_"+a+"("+a+","+c+");\n";a="slcd_"+a;return"ON"===b?a+".Power();\n":a+".noPower();\n"};
Blockly.Arduino.grove_serial_lcd_effect=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.definitions_.define_seriallcd="#include <SerialLCD.h>\n";Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";var c=_get_next_pin(a);Blockly.Arduino.definitions_["var_lcd"+a]="SerialLCD slcd_"+a+"("+a+","+c+");\n";a="slcd_"+a;return"LEFT"===b?a+".scrollDisplayLeft();\n":"RIGHT"===b?a+".scrollDisplayRight();\n":a+".autoscroll();\n"};
Blockly.Arduino.grove_sound_sensor=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.grove_pir_motion_sensor=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_line_finder=function(){var a=this.getFieldValue("PIN");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_ultrasonic_ranger=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("UNIT");Blockly.Arduino.definitions_.define_ultrasonic="#include <Ultrasonic.h>\n";Blockly.Arduino.definitions_["var_ultrasonic"+a]="Ultrasonic ultrasonic_"+a+"("+a+");\n";"cm"===b?(Blockly.Arduino.setups_["setup_ultrasonic_"+a]="ultrasonic_"+a+".MeasureInCentimeters();",a="ultrasonic_"+a+".RangeInCentimeters();"):(Blockly.Arduino.setups_["setup_ultrasonic_"+a]="ultrasonic_"+a+".MeasureInInches();",
a="ultrasonic_"+a+".RangeInInches();");return[a,Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.grove_motor_shield=function(){var a=this.getFieldValue("DIRECTION");Blockly.Arduino.setups_.setup_motor="pinMode(8,OUTPUT);//I1\n  pinMode(11,OUTPUT);//I2\n  pinMode(9,OUTPUT);//speedPinA\n  pinMode(12,OUTPUT);//I3\n  pinMode(13,OUTPUT);//i4\n  pinMode(10,OUTPUT);//speedPinB\n";var b="";"forward"===a?(Blockly.Arduino.definitions_.define_forward="void forward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n",b=
"forward();\n"):"right"===a?(Blockly.Arduino.definitions_.define_right="void right()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n\n",b="right();\n"):"left"===a?(Blockly.Arduino.definitions_.define_left="void left()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",
b="left();\n"):"backward"===a?(Blockly.Arduino.definitions_.define_backward="void backward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",b="backward();\n"):"stop"===a&&(Blockly.Arduino.definitions_.define_stop="void stop()\n{\ndigitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\ndigitalWrite(10,LOW);\ndelay(1000);\n}\n\n",
b="stop();\n");return b};Blockly.Arduino.grove_thumb_joystick=function(){var a=this.getFieldValue("PIN"),b="0",b="y"===this.getFieldValue("AXIS")?_get_next_pin(a):a;return["analogRead("+b+")",Blockly.Arduino.ORDER_ATOMIC]};function hexToR(a){return parseInt(cutHex(a).substring(0,2),16)}function hexToG(a){return parseInt(cutHex(a).substring(2,4),16)}function hexToB(a){return parseInt(cutHex(a).substring(4,6),16)}function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}
Blockly.Arduino.grove_rgb_led=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a);Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", OUTPUT);";Blockly.Arduino.setups_["setup_input_"+b]="pinMode("+b+", OUTPUT);";Blockly.Arduino.definitions_.define_uint8="#define uint8 unsigned char";Blockly.Arduino.definitions_.define_uint16="#define uint16 unsigned int";Blockly.Arduino.definitions_.define_uint32="#define uint32 unsigned long int";Blockly.Arduino.definitions_["define_clkproduce_"+
a]="void ClkProduce_"+a+"(void)\n{\n  digitalWrite("+a+", LOW);\n  delayMicroseconds(20);\n  digitalWrite("+a+", HIGH);\n  delayMicroseconds(20);\n}\n";Blockly.Arduino.definitions_["define_send32zero_"+a]="void Send32Zero_"+a+"(void)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    digitalWrite("+b+", LOW);\n    ClkProduce_"+a+"();\n  }\n}\n";Blockly.Arduino.definitions_.define_taskanticode="uint8 TakeAntiCode(uint8 dat)\n{\n  uint8 tmp = 0;\n  if ((dat & 0x80) == 0)\n  {\n    tmp |= 0x02;\n  }\n  \n  if ((dat & 0x40) == 0)\n  {\n    tmp |= 0x01;\n  }\n  return tmp;\n}\n";
Blockly.Arduino.definitions_["define_datasend_"+a]="// gray data\nvoid DatSend_"+a+"(uint32 dx)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    if ((dx & 0x80000000) != 0)\n    {\n      digitalWrite("+b+", HIGH);\n    }\n    else\n    {\n      digitalWrite("+b+", LOW);\n    }\n  dx <<= 1;\n  ClkProduce_"+a+"();\n  }\n}\n";Blockly.Arduino.definitions_["define_datadealwithsend_"+a]="// data processing\nvoid DataDealWithAndSend_"+a+"(uint8 r, uint8 g, uint8 b)\n{\n  uint32 dx = 0;\n  dx |= (uint32)0x03 << 30;             // highest two bits 1\uff0cflag bits\n  dx |= (uint32)TakeAntiCode(b) << 28;\n  dx |= (uint32)TakeAntiCode(g) << 26;\n  dx |= (uint32)TakeAntiCode(r) << 24;\n\n  dx |= (uint32)b << 16;\n  dx |= (uint32)g << 8;\n  dx |= r;\n\n  DatSend_"+
a+"(dx);\n}\n";b="Send32Zero_"+a+"(); // begin\n";if(0==this.itemCount_)return"";for(var c=0;c<this.itemCount_;c++)var d=this.getFieldValue("RGB"+c),b=b+("DataDealWithAndSend_"+a+"("+hexToR(d)+", "+hexToG(d)+", "+hexToB(d)+"); // first node data\n");return b+("Send32Zero_"+a+"();  // send to update data\n")};
Blockly.Arduino.grove_bluetooth_slave=function(){var a=this.getFieldValue("PIN"),b=_get_next_pin(a),c=this.getFieldValue("NAME");this.getFieldValue("PINCODE");var d=Blockly.Arduino.statementToCode(this,"RCV"),e=Blockly.Arduino.statementToCode(this,"SNT");Blockly.Arduino.definitions_.define_softwareserial="#include <SoftwareSerial.h>\n";Blockly.Arduino.definitions_["var_bluetooth_"+a]="SoftwareSerial blueToothSerial_"+a+"("+a+","+b+");\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]="Serial.begin(9600);\n";
Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  pinMode("+a+", INPUT);\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  pinMode("+b+", OUTPUT);\n";Blockly.Arduino.setups_["setup_bluetooth_"+a]+="  setupBlueToothConnection_"+a+"();\n";Blockly.Arduino.definitions_["define_setupBlueToothConnection_"+a]="void setupBlueToothConnection_"+a+"()\n{\n  blueToothSerial_"+a+".begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n  blueToothSerial_"+a+'.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n  blueToothSerial_'+
a+'.print("\\r\\n+STNA='+c+'\\r\\n"); //set the bluetooth name as "'+c+'"\n  blueToothSerial_'+a+'.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n  blueToothSerial_'+a+'.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n  blueToothSerial_'+a+'.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n  delay(2000); // This delay is required.\n  blueToothSerial_'+a+'.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n  Serial.println("The slave bluetooth is inquirable!");\n  delay(2000); // This delay is required.\n  blueToothSerial_'+
a+".flush();\n}\n";return"char recvChar_"+a+";\nwhile(1) {\n  if(blueToothSerial_"+a+".available()) {//check if there is any data sent from the remote bluetooth shield\n    recvChar_"+a+" = blueToothSerial_"+a+".read();\n    Serial.print(recvChar_"+a+");\n"+d+"  }\n  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n    recvChar_"+a+" = Serial.read();\n    blueToothSerial_"+a+".print(recvChar_"+a+");\n"+e+"  }\n}\n"};Blockly.Arduino.inout={};Blockly.Arduino.inout_buildin_led=function(){var a=this.getFieldValue("STAT");Blockly.Arduino.setups_.setup_output_13="pinMode(13, OUTPUT);";return"digitalWrite(13, "+a+");\n"};Blockly.Arduino.inout_digital_write=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";return"digitalWrite("+a+", "+b+");\n"};
Blockly.Arduino.inout_digital_read=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("INPUT_MODE");Blockly.Arduino.setups_["setup_input_"+a]="pinMode("+a+", "+b+");";return["digitalRead("+a+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.inout_analog_write=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("NUM");return"analogWrite("+a+", "+b+");\n"};Blockly.Arduino.inout_analog_read=function(){return["analogRead("+this.getFieldValue("PIN")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.inout_highlow=function(){return["HIGH"==this.getFieldValue("BOOL")?"HIGH":"LOW",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.pulsein=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("TIMEOUT"),c="HIGH"==this.getFieldValue("type")?"HIGH":"LOW";console.log(b);Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", INPUT);";return[0<b?"pulseIn("+a+","+c+","+b+")":"pulseIn("+a+","+c+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.custom_tone=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("FREQ"),c=this.getFieldValue("DURATION");return"tone("+a+","+b+","+c+");\n"};Blockly.Arduino.tone=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("FREQ");return"tone("+a+","+b+",300);\n"};Blockly.Arduino.involt={};Blockly.Arduino.involt_directmode=function(){var a="TRUE"==this.getFieldValue("BOOL")?"true":"false";Blockly.Arduino.definitions_.define_directmode="boolean directMode = "+a+";\n";return""};
Blockly.Arduino.involt_chromereceive=function(){Blockly.Arduino.definitions_.define_chromeDigital="int chromeDigital[] = {};\n";Blockly.Arduino.definitions_.define_stringV='String V = "V";\n';Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin(115200);\n";Blockly.Arduino.definitions_.define_chromeSend='void chromeSend(int pinNumber, int sendValue)\n{\n  String A = "A";\n  String E = "E";\n  Serial.println(A+pinNumber+V+sendValue+E);\n}\n\n';Blockly.Arduino.definitions_.define_chromeReceive=
'void chromeReceive()\n{\n  String chrome;\n  String pwm = "P";\n  String dig = "D";\n  int pin;\n  int val;\n  int chromeLen;\n  if(Serial.available() > 0){\n    String chrome = Serial.readStringUntil(\'\u00a5n\');\n    int chromeLen = chrome.length();\n    String pinRaw = chrome.substring(1,chrome.indexOf(V));\n    String valRaw = chrome.substring(chrome.indexOf(V)+1,chromeLen);\n    pin = pinRaw.toInt();\n    val = valRaw.toInt();\n    \n    if(directMode){\n      if (chrome.indexOf(dig) == 0){\n        digitalWrite(pin, val);\n      }\n      else if (chrome.indexOf(pwm) == 0 ){\n        analogWrite(pin, val);\n      }\n    }\n    else{\n      chromeDigital[pin]=val;\n    }\n  }\n}\n\n';
return"chromeReceive();\n"};Blockly.Arduino.involt_sendvalue=function(){return"pinMode("+this.getFieldValue("PIN")+",OUTPUT);\n"};Blockly.Arduino.involt_receivevalue=function(){return"chromeSend(0, analogRead("+this.getFieldValue("PIN")+"));\n"};Blockly.Arduino.logic={};
Blockly.Arduino.controls_if=function(){for(var a=0,b=Blockly.Arduino.valueToCode(this,"IF"+a,Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"DO"+a),d="if ("+b+") {\n"+c+"\n}",a=1;a<=this.elseifCount_;a++)b=Blockly.Arduino.valueToCode(this,"IF"+a,Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"DO"+a),d+=" else if ("+b+") {\n"+c+"}";this.elseCount_&&(c=Blockly.Arduino.statementToCode(this,"ELSE"),d+=" else {\n"+c+"\n}");return d+"\n"};
Blockly.Arduino.logic_compare=function(){var a=this.getFieldValue("OP"),a=Blockly.Arduino.logic_compare.OPERATORS[a],b="=="==a||"!="==a?Blockly.Arduino.ORDER_EQUALITY:Blockly.Arduino.ORDER_RELATIONAL,c=Blockly.Arduino.valueToCode(this,"A",b)||"0",d=Blockly.Arduino.valueToCode(this,"B",b)||"0";return[c+" "+a+" "+d,b]};Blockly.Arduino.logic_compare.OPERATORS={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="};
Blockly.Arduino.logic_operation=function(){var a="AND"==this.getFieldValue("OP")?"&&":"||",b="&&"==a?Blockly.Arduino.ORDER_LOGICAL_AND:Blockly.Arduino.ORDER_LOGICAL_OR,c=Blockly.Arduino.valueToCode(this,"A",b)||"false",d=Blockly.Arduino.valueToCode(this,"B",b)||"false";return[c+" "+a+" "+d,b]};Blockly.Arduino.logic_negate=function(){var a=Blockly.Arduino.ORDER_UNARY_PREFIX;return["!"+(Blockly.Arduino.valueToCode(this,"BOOL",a)||"false"),a]};
Blockly.Arduino.logic_boolean=function(){return["TRUE"==this.getFieldValue("BOOL")?"true":"false",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.logic_null=function(){return["NULL",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.math={};Blockly.Arduino.math_number=function(){var a=window.parseFloat(this.getFieldValue("NUM"));return[a,0>a?Blockly.Arduino.ORDER_UNARY_PREFIX:Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.math_arithmetic=function(){var a=this.getFieldValue("OP"),b=Blockly.Arduino.math_arithmetic.OPERATORS[a],a=b[0],b=b[1],c=Blockly.Arduino.valueToCode(this,"A",b)||"0",d=Blockly.Arduino.valueToCode(this,"B",b)||"0";return a?[c+a+d,b]:["Math.pow("+c+", "+d+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.math_arithmetic.OPERATORS={ADD:[" + ",Blockly.Arduino.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Arduino.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Arduino.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Arduino.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_random_max_min=function(a){var b=Blockly.Arduino.valueToCode(a,"MAX",Blockly.Arduino.ORDER_ATOMIC)||"1";a=Blockly.Arduino.valueToCode(a,"MIN",Blockly.Arduino.ORDER_ATOMIC)||"0";return[0<a?"random("+a+", "+b+")":"random("+b+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_map=function(){var a=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_NONE),b=Blockly.Arduino.valueToCode(this,"FROMLOW",Blockly.Arduino.ORDER_ATOMIC)||"0",c=Blockly.Arduino.valueToCode(this,"FROMHIGH",Blockly.Arduino.ORDER_ATOMIC)||"1024",d=Blockly.Arduino.valueToCode(this,"TOLOW",Blockly.Arduino.ORDER_ATOMIC)||"0",e=Blockly.Arduino.valueToCode(this,"TOHIGH",Blockly.Arduino.ORDER_ATOMIC)||"1024";return["map("+a+","+b+","+c+","+d+","+e+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_constrain=function(a){var b=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_NONE)||"0",c=Blockly.Arduino.valueToCode(a,"LOW",Blockly.Arduino.ORDER_NONE)||"0";a=Blockly.Arduino.valueToCode(a,"HIGH",Blockly.Arduino.ORDER_NONE)||"255";return["constrain("+b+", "+c+","+a+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_pow=function(a){var b=Blockly.Arduino.valueToCode(a,"base",Blockly.Arduino.ORDER_NONE)||"1";a=Blockly.Arduino.valueToCode(a,"exp",Blockly.Arduino.ORDER_NONE)||"1";return["pow("+b+", "+a+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.math_single=function(a){var b=a.getFieldValue("OP"),c;a=Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_NONE)||"1";switch(b){case "ABS":c="abs("+a+")";break;case "ROOT":c="sqrt("+a+")";break;case "SIN":c="sin("+a+")";break;case "COS":c="cos("+a+")";break;case "TAN":c="tan("+a+")"}return[c,Blockly.Arduino.ORDER_NONE]};Blockly.Arduino.procedures={};
Blockly.Arduino.procedures_defreturn=function(){var a=Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=Blockly.Arduino.statementToCode(this,"STACK");Blockly.Arduino.INFINITE_LOOP_TRAP&&(b=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+b);var c=Blockly.Arduino.valueToCode(this,"RETURN",Blockly.Arduino.ORDER_NONE)||"";c&&(c="  return "+c+";\n");for(var d=c?"Dynamic":"void",e=[],f=0;f<this.arguments_.length;f++)e[f]=Blockly.Arduino.variableDB_.getName(this.arguments_[f],
Blockly.Variables.NAME_TYPE);b=d+" "+a+"("+e.join(", ")+") {\n"+b+c+"}\n";b=Blockly.Arduino.scrub_(this,b);Blockly.Arduino.definitions_[a]=b;return null};Blockly.Arduino.procedures_defnoreturn=Blockly.Arduino.procedures_defreturn;
Blockly.Arduino.procedures_callreturn=function(){for(var a=Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],c=0;c<this.arguments_.length;c++)b[c]=Blockly.Arduino.valueToCode(this,"ARG"+c,Blockly.Arduino.ORDER_NONE)||"null";return[a+"("+b.join(", ")+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.procedures_callnoreturn=function(){for(var a=Blockly.Arduino.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],c=0;c<this.arguments_.length;c++)b[c]=Blockly.Arduino.valueToCode(this,"ARG"+c,Blockly.Arduino.ORDER_NONE)||"null";return a+"("+b.join(", ")+");\n"};
Blockly.Arduino.procedures_ifreturn=function(){var a="if ("+(Blockly.Arduino.valueToCode(this,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false")+") {\n";if(this.hasReturnValue_)var b=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_NONE)||"null",a=a+("  return "+b+";\n");else a+="  return;\n";return a+"}\n"};Blockly.Arduino.serial={};Blockly.Arduino.serial_print=function(){var a=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"0";Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";return"Serial.print("+a+");\n"};
Blockly.Arduino.serial_read=function(){Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";return["Serial.read()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.serial_available=function(){Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC);Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";return["Serial.available()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.serial_println=function(){var a=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"0";Blockly.Arduino.setups_["setup_serial_"+profile["default"].serial]="Serial.begin("+profile["default"].serial+");\n";return"Serial.println("+a+");\n"};Blockly.Arduino.texts={};Blockly.Arduino.text=function(){return[Blockly.Arduino.quote_(this.getFieldValue("TEXT")),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.times={};Blockly.Arduino.delay=function(){return"delay("+this.getFieldValue("DELAY_TIME")+");\n"};Blockly.Arduino.millis=function(){return"millis()"};Blockly.Arduino.micros=function(){return["micros()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.delayMicroseconds=function(){return"delayMicroseconds("+this.getFieldValue("DELAY_TIME")+");\n"};Blockly.Arduino.ultrasonic={};
Blockly.Arduino.ultrasonic_setting=function(){var a=this.getFieldValue("TRIG"),b=this.getFieldValue("ECHO"),c=this.getFieldValue("RESET");Blockly.Arduino.definitions_.define_sonic_timeout="int Sonic_Time_out = 3000;\n";Blockly.Arduino.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";Blockly.Arduino.setups_["setup_output_"+b]="pinMode("+b+", INPUT);";Blockly.Arduino.setups_["setup_output_"+c]="pinMode("+c+", OUTPUT);";Blockly.Arduino.definitions_.define_Sonic_Timing="long Sonic_Timing(){\n  digitalWrite("+
a+", LOW);\n  delayMicroseconds(2);\n  digitalWrite("+a+", HIGH);\n  delayMicroseconds(10);\n  digitalWrite("+a+", LOW);\n  long duration = pulseIn("+b+",HIGH,Sonic_Time_out);\n  if ( duration == 0 ){\n    duration = Sonic_Time_out;\n    digitalWrite("+c+", HIGH);\n    delay(25);\n    digitalWrite("+c+" ,LOW);\n    delay(225);\n  }\n  return duration;\n}\n";return""};
Blockly.Arduino.ultrasonic_maxrange=function(){var a=this.getFieldValue("UNIT"),b=this.getFieldValue("MAXRANGE");Blockly.Arduino.definitions_.define_sonic_timeout="CM"==a?"int Sonic_Time_out = "+b+"*2*29;\n":"int Sonic_Time_out = "+b+"*2*72;\n";return""};Blockly.Arduino.ultrasonic_distance=function(){return["CM"==this.getFieldValue("UNIT")?"Sonic_Timing()/29/2":"Sonic_Timing()/74/2",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.variables={};Blockly.Arduino.variables_get=function(a){return[Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.variables_declare=function(){this.getFieldValue("TYPE");var a=Blockly.Arduino.valueToCode(this,"VALUE",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",b=Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);Blockly.Arduino.setups_["setup_var"+b]=b+" = "+a+";\n";return""};
Blockly.Arduino.variables_set=function(a){a=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";return Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+a+";\n"};