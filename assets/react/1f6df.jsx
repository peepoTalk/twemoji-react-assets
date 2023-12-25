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
const Svg1F6Df = (props) => (<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 36 36" width="1em" height="1em" {...props}>
    <path fill="#FF4018" d="M18 3C9.716 3 3 9.716 3 18s6.716 15 15 15 15-6.716 15-15S26.284 3 18 3m0 23c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8"/>
    <path fill="#E2121C" d="M18 9c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9m0 17c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8"/>
    <path fill="#E1E1E1" d="M7.393 7.393c.481-.481.994-.907 1.519-1.309l5.031 5.031a7.975 7.975 0 0 0-1.6 1.228 7.975 7.975 0 0 0-1.228 1.6l-5.031-5.03c.402-.526.829-1.039 1.309-1.52m1.52 22.523 5.031-5.031a7.975 7.975 0 0 1-1.6-1.228 7.975 7.975 0 0 1-1.228-1.6l-5.031 5.031c.402.526.828 1.039 1.309 1.519s.993.907 1.519 1.309m21.003-2.829-5.031-5.031c-.336.57-.739 1.111-1.228 1.6s-1.03.892-1.6 1.228l5.031 5.031c.526-.402 1.039-.828 1.519-1.309s.907-.993 1.309-1.519M27.087 6.084l-5.031 5.031c.57.336 1.111.739 1.6 1.228.489.489.892 1.03 1.228 1.6l5.031-5.031c-.402-.526-.828-1.039-1.309-1.519s-.993-.907-1.519-1.309"/>
    <path fill="#E1E1E1" d="M12.66 35.014c-.503 0-.909-.03-1.126-.084-1.845-.464-3.058-1.805-4.23-3.101-.268-.295-.535-.591-.812-.878-.448-.466-.924-.908-1.397-1.35-.815-.76-1.659-1.545-2.369-2.451C.758 24.638.68 21.543 1.475 19.59c.228-.562.628-1.179 1.167-1.596a3.5 3.5 0 0 1-.988-1.192c-.988-1.895-1.175-4.909.752-7.048.51-.566 1.087-1.059 1.646-1.536.558-.476 1.085-.926 1.551-1.442.487-.54.897-1.142 1.332-1.778.627-.921 1.277-1.874 2.175-2.615 2.211-1.818 5.423-1.797 7.455-.837.622.294 1.11.668 1.44 1.093.294-.375.71-.715 1.231-.995 1.752-.943 4.78-1.205 7.282.445 1.368.903 2.309 2.296 3.138 3.525l4.14 6.138c1.307 1.936 1.409 3.884.288 5.484a3.314 3.314 0 0 1-.735.765c.358.265.677.627.926 1.065 1.22 2.144 1.007 4.707-.554 6.689-.23.292-.475.578-.72.864-.67.78-1.302 1.517-1.64 2.402-.118.312-.198.634-.279.958-.374 1.489-.798 3.176-4.422 4.173-1.823.501-5.214 1.436-7.549.149a3.645 3.645 0 0 1-1.112-.939 3.652 3.652 0 0 1-1.129.948c-.914.499-2.891.704-4.21.704m.854-33.109c-1.309 0-2.695.367-3.768 1.25-.789.65-1.37 1.503-1.986 2.406-.435.637-.883 1.295-1.416 1.885-.509.565-1.086 1.057-1.644 1.533-.559.477-1.086.927-1.553 1.444-1.607 1.784-1.441 4.317-.607 5.916.281.538.819 1.125 1.486 1.161L4 18.5c-.69 0-1.312.76-1.6 1.466-.664 1.632-.599 4.382 1.112 6.567.662.844 1.439 1.569 2.264 2.336.487.454.975.909 1.437 1.388.283.294.559.598.832.9 1.122 1.24 2.183 2.412 3.733 2.802.527.132 3.573.04 4.614-.528.551-.3 1.106-.86 1.107-1.432l1 .001c-.001.566.55 1.124 1.095 1.425 1.979 1.092 5.117.226 6.801-.237 3.062-.843 3.366-2.053 3.718-3.453.091-.362.182-.721.314-1.07.4-1.048 1.119-1.886 1.815-2.697.235-.274.471-.549.693-.831 1.304-1.656 1.484-3.792.47-5.576-.279-.491-.802-1.027-1.434-1.062V17.5c.461-.024.944-.337 1.293-.837 1.111-1.586.451-3.242-.297-4.351l-4.14-6.138c-.815-1.208-1.658-2.457-2.86-3.25-2.157-1.424-4.757-1.206-6.256-.399-.77.413-1.211.952-1.211 1.475h-1c0-.575-.496-1.14-1.362-1.549-.726-.344-1.654-.546-2.624-.546"/>
    <path fill="#AEB3B2" d="m25.611 13.218-.726.726c-.336-.57-.739-1.111-1.228-1.6s-1.03-.892-1.6-1.228l.726-.726a9.046 9.046 0 0 1 2.828 2.828M12.343 23.657a7.975 7.975 0 0 1-1.228-1.6l-.726.726a9.056 9.056 0 0 0 2.828 2.828l.726-.726a7.975 7.975 0 0 1-1.6-1.228m12.542-1.601c-.336.57-.739 1.111-1.228 1.6s-1.03.892-1.6 1.228l.726.726a9.056 9.056 0 0 0 2.828-2.828zm-14.496-8.838.726.726c.336-.57.739-1.111 1.228-1.6s1.03-.892 1.6-1.228l-.726-.726a9.046 9.046 0 0 0-2.828 2.828"/>
  </svg>);
exports.default = Svg1F6Df;