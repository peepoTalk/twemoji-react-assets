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
const React = __importStar(require("react"));
const SvgA9 = (props) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" {...props}>
    <path fill="#31373D" d="M18 0C8.059 0 0 8.06 0 18c0 9.941 8.059 18 18 18s18-8.059 18-18c0-9.94-8.059-18-18-18m0 34C9.164 34 2 26.837 2 18 2 9.164 9.164 2 18 2c8.837 0 16 7.164 16 16 0 8.837-7.163 16-16 16"/>
    <path fill="#31373D" d="M18.723 6.552c2.263 0 6.666.744 6.666 3.473 0 1.116-.775 2.077-1.922 2.077-1.272 0-2.139-1.085-4.744-1.085-3.845 0-5.829 3.256-5.829 7.038 0 3.689 2.015 6.852 5.829 6.852 2.605 0 3.658-1.302 4.929-1.302 1.396 0 2.047 1.395 2.047 2.107 0 2.977-4.682 3.659-6.976 3.659-6.294 0-10.666-4.992-10.666-11.41 0-6.448 4.341-11.409 10.666-11.409"/>
  </svg>);
exports.default = SvgA9;
