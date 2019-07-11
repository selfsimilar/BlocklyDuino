'use strict';

goog.provide('Blockly.Blocks.sparki');

goog.require('Blockly.Blocks');

Blockly.Blocks.sparki_img_RGB = filepath.media+'/sparki_RGB.png';
Blockly.Blocks.sparki_img_accel = filepath.media+'/sparki_accel.png';
Blockly.Blocks.sparki_img_beep = filepath.media+'/sparki_beep.png';
Blockly.Blocks.sparki_img_forward_backward = filepath.media+'/sparki_forward-backward.png';
Blockly.Blocks.sparki_img_gripper_move = filepath.media+'/sparki_gripper-move.png';
Blockly.Blocks.sparki_img_gripper_stop = filepath.media+'/sparki_gripper-stop.png';
Blockly.Blocks.sparki_img_iredge = filepath.media+'/sparki_iredge.png';
Blockly.Blocks.sparki_img_irled = filepath.media+'/sparki_irled.png';
Blockly.Blocks.sparki_img_lcd = filepath.media+'/sparki_lcd.png';
Blockly.Blocks.sparki_img_left_right = filepath.media+'/sparki_left-right.png';
Blockly.Blocks.sparki_img_light = filepath.media+'/sparki_light.png';
Blockly.Blocks.sparki_img_mag = filepath.media+'/sparki_mag.png';
Blockly.Blocks.sparki_img_remote = filepath.media+'/sparki_remote.png';
Blockly.Blocks.sparki_img_servo = filepath.media+'/sparki_servo.png';
Blockly.Blocks.sparki_img_status = filepath.media+'/sparki_status.png';
Blockly.Blocks.sparki_img_stop = filepath.media+'/sparki_stop.png';
Blockly.Blocks.sparki_img_ultrasonic = filepath.media+'/sparki_ultrasonic.png';
Blockly.Blocks.sparki_img_left = filepath.media+'/sparki_left.png';
Blockly.Blocks.sparki_img_right = filepath.media+'/sparki_right.png';
Blockly.Blocks.sparki_img_fwd = filepath.media+'/sparki_fwd.png';
Blockly.Blocks.sparki_img_bwd = filepath.media+'/sparki_backward.png';


Blockly.Blocks['sparki_move_forward'] = {
	/**
	* Block for moving sparki forward
	*/
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_fwd, 48, 48))
        .appendField(Blockly.Msg.SPARKI_MOVE_FORWARD_APPENDTEXT)
        .appendField(new Blockly.FieldTextInput("50"),"forwardDist")
        .appendField(Blockly.Msg.SPARKI_CENTIMETERS_APPENDTEXT);
    this.setPreviousStatement(true);//(true, null)
    this.setNextStatement(true);//(true,null)
    }
};

Blockly.Blocks['sparki_move_backward'] = {
	/**
	* Block for moving sparki backward
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_bwd, 48, 48))
        .appendField(Blockly.Msg.SPARKI_MOVE_BACKWARD_APPENDTEXT)
        .appendField(new Blockly.FieldTextInput("50"),"backwardDist")
        .appendField(Blockly.Msg.SPARKI_CENTIMETERS_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 //this.setTooltip(Blockly.Msg.SPARKI_MOVE_TOOLTIP);
  }
};

Blockly.Blocks['sparki_move_left'] = {
	/**
	* Block for moving sparki left
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_left, 48, 48))
        .appendField(Blockly.Msg.SPARKI_MOVE_LEFT_APPENDTEXT)
        .appendField(new Blockly.FieldTextInput("70"),"leftAngle")
        .appendField(Blockly.Msg.SPARKI_DEGREES_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
// this.setTooltip(Blockly.Msg.SPARKI_MOVE_TOOLTIP);
  }
};

Blockly.Blocks['sparki_move_right'] = {
	/**
	* Block for moving sparki right
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_right, 48, 48))
        .appendField(Blockly.Msg.SPARKI_MOVE_RIGHT_APPENDTEXT)
        .appendField(new Blockly.FieldTextInput("70"),"rightAngle")
        .appendField(Blockly.Msg.SPARKI_DEGREES_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
// this.setTooltip(Blockly.Msg.SPARKI_MOVE_TOOLTIP);
  }
};

Blockly.Blocks['sparki_opengripper'] = {
	/**
	* Block for opening sparki gripper
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_gripper_move, 48, 48))
        .appendField("open gripper")
        .appendField(new Blockly.FieldTextInput("5"),"openGripperDist")
        .appendField("cm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_OPENGRIPPER_TOOLTIP);
  }
};

Blockly.Blocks['sparki_closegripper'] = {
	/**
	* Block for closing sparki gripper
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_gripper_move, 48, 48))
        .appendField(Blockly.Msg.SPARKI_CLOSE_GRIPPER_APPENDTEXT)
        .appendField(new Blockly.FieldTextInput("5"),"closeGripperDist")
        .appendField(Blockly.Msg.SPARKI_CENTIMETERS_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
// this.setTooltip(Blockly.Msg.SPARKI_CLOSEGRIPPER_TOOLTIP);
  }
};

Blockly.Blocks['sparki_stop_movement'] = {
	/**
	* Block for stopping sparki
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_stop, 48, 48))
        .appendField("stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
// this.setTooltip(Blockly.Msg.SPARKI_STOP_TOOLTIP);
 //this.setHelpUrl("");
  }
};

Blockly.Blocks['sparki_stopgripper'] = {
	/**
	* Block for stopping sparki gripper
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_gripper_stop, 48, 48))
        .appendField(Blockly.Msg.SPARKI_STOP_GRIPPER_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['sparki_servo'] = {
  init: function() {
    this.appendValueInput("ANGLE")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_servo, 48, 48))
      .setCheck("Number")
      .appendField(Blockly.Msg.SPARKI_SERVO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SPARKI_DEGREES_APPENDTEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['sparki_bark'] = {
	/**
	* Block for making sparki bark/beep
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_beep, 48, 48))
        .appendField(Blockly.Msg.SPARKI_BARK_APPENDTEXT)
        .appendField(new Blockly.FieldTextInput("60"), "frequency")
        .appendField(Blockly.Msg.SPARKI_BARK_FREQ_APPENDTEXT)
        .appendField(new Blockly.FieldTextInput("1000"), "Time")
        .appendField(Blockly.Msg.SPARKI_BARK_MS_APPENDTEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
// this.setTooltip(Blockly.Msg.SPARKI_BARK_TOOLTIP);
  }
};

Blockly.Blocks['sparki_ultrasonicdistance'] = {
	/**
	* Block for sparki to sense how far away is closest physical object 	*(returns a number)
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_ultrasonic, 48, 48))
        .appendField(Blockly.Msg.SPARKI_DISTANCE_APPENDTEXT);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
// this.setTooltip(Blockly.Msg.SPARKI_ULTRASONIC_TOOLTIP);
  }
};

Blockly.Blocks['sparki_lose']={
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPARKI_LOSE_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['sparki_accelerometer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_accel, 48, 48))
        .appendField(Blockly.Msg.SPARKI_ACCELEROMETER)
        .appendField(new Blockly.FieldDropdown([["X","X"],["Y","Y"],["Z","Z"]]), "axis")
        .appendField(Blockly.Msg.SPARKI_ACCELEROMETER_AXIS);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
  }
};

Blockly.Blocks['sparki_ir_reflectance_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_iredge, 48, 48))
        .appendField(new Blockly.FieldDropdown([["Left Edge","edgeLeft"], ["Left Line","lineLeft"], ["Center Line","lineCenter"], ["Right Line","lineRight"], ["Right Edge","edgeRight"]]), "methodName")
        .appendField(Blockly.Msg.SPARKI_IR_REFLECTANCE_SENSOR);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
  }
};

Blockly.Blocks['sparki_light_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_light, 48, 48))
        .appendField(new Blockly.FieldDropdown([["Left","lightLeft"], ["Center","lightCenter"], ["Right","lightRight"]]), "methodName")
        .appendField(Blockly.Msg.SPARKI_LIGHT_SENSOR);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
  }
};

Blockly.Blocks['sparki_lcd_print'] = {
  init: function() {
    this.setColour(230);
    this.appendValueInput("CONTENT")
        .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_lcd, 48, 48))
      .setCheck(["Number", "String"])
      .appendField(Blockly.Msg.SPARKI_LCD_PRINT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['sparki_lcd_clear'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.sparki_img_lcd, 48, 48))
      .appendField(Blockly.Msg.SPARKI_LCD_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
