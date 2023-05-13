"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
}
catch (error) {
    core.setFailed(error.message);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFzQztBQUN0Qyx3REFBMEM7QUFFMUMsSUFBSTtJQUNGLHVEQUF1RDtJQUN2RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdCLHlFQUF5RTtJQUN6RSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixPQUFPLEVBQUUsQ0FBQyxDQUFDO0NBQzlDO0FBQUMsT0FBTyxLQUFVLEVBQUU7SUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb3JlIGZyb20gJ0BhY3Rpb25zL2NvcmUnO1xuaW1wb3J0ICogYXMgZ2l0aHViIGZyb20gJ0BhY3Rpb25zL2dpdGh1Yic7XG5cbnRyeSB7XG4gIC8vIGB3aG8tdG8tZ3JlZXRgIGlucHV0IGRlZmluZWQgaW4gYWN0aW9uIG1ldGFkYXRhIGZpbGVcbiAgY29uc3QgbmFtZVRvR3JlZXQgPSBjb3JlLmdldElucHV0KCd3aG8tdG8tZ3JlZXQnKTtcbiAgY29uc29sZS5sb2coYEhlbGxvICR7bmFtZVRvR3JlZXR9IWApO1xuICBjb25zdCB0aW1lID0gKG5ldyBEYXRlKCkpLnRvVGltZVN0cmluZygpO1xuICBjb3JlLnNldE91dHB1dCgndGltZScsIHRpbWUpO1xuICAvLyBHZXQgdGhlIEpTT04gd2ViaG9vayBwYXlsb2FkIGZvciB0aGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHdvcmtmbG93XG4gIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShnaXRodWIuY29udGV4dC5wYXlsb2FkLCB1bmRlZmluZWQsIDIpO1xuICBjb25zb2xlLmxvZyhgVGhlIGV2ZW50IHBheWxvYWQ6ICR7cGF5bG9hZH1gKTtcbn0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgY29yZS5zZXRGYWlsZWQoZXJyb3IubWVzc2FnZSk7XG59Il19