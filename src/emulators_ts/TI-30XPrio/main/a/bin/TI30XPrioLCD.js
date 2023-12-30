'use strict';

Object.defineProperty(exports, "__esModule", {
	"value": true
});
const generic_lcd = require("../../GenericScientificLCDForSmartview");
class TI30XPrioLCD extends generic_lcd.GenericScientificLCDForSmartview {
	constructor(calcDivId) {
		super("TI30XPRIO", calcDivId);
	}
}
exports.TI30XPrioLCD = TI30XPrioLCD;
