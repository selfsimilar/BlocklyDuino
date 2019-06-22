'use strict';

goog.provide('Blockly.Blocks.sparki');

goog.require('Blockly.Blocks');

//need to change text to variables in msg.json

Blockly.Blocks['sparki_move_forward'] = {
	/**
	* Block for moving sparki forward
	*/
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
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
        .appendField(Blockly.Msg.SPARKI_STOP_GRIPPER_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
// this.setTooltip(Blockly.Msg.SPARKI_STOPGRIPPER_TOOLTIP);
  }
};

Blockly.Blocks['sparki_bark'] = {
	/**
	* Block for making sparki bark/beep
	*/
  init: function() {
    this.appendDummyInput()
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

Blockly.Blocks['sparki_leftlight'] = {
	/**
	* Block for sparki to sense light coming from left (returns a number)
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPARKI_LEFTSENSOR_APPENDTEXT);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
// this.setTooltip(Blockly.Msg.SPARKI_LEFT_TOOLTIP );
  }
};

Blockly.Blocks['sparki_rightlight'] = {
	/**
	* Block for sparki to sense light coming from right (returns a number)
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPARKI_RIGHTSENSOR_APPENDTEXT);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 //this.setTooltip(Blockly.Msg.SPARKI_RIGHTLIGHT_TOOLTIP);
  }
};

Blockly.Blocks['sparki_centerlight'] = {
	/**
	* Block for sparki to sense light coming from forward direction
	*(returns a number)
	*/
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPARKI_CENTERLIGHT_APPENDTEXT);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 //this.setTooltip(Blockly.Msg.SPARKI_CENTER_TOOLTIP);
  }
};

Blockly.Blocks['include_sparki_library'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPARKI_LIBRARY_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};
