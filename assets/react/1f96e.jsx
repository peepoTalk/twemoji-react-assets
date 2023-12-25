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
const Svg1F96E = (props) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" {...props}>
    <path fill="#FFAC33" d="M35.15 20.01c-.115-3.396-.216-7.078-.216-7.078 0-4.97-7.545-8.929-16.934-8.929-9.389 0-17 4.03-17 9 0 0-.1 4.364-.1 7.438s.162 5.154.162 5.154c.108 1.187.511 2.056 1.533 3.21.41.464 1.115.891 1.596 1.051.48.16 1.89-.479 1.89-.479L18 25.004l4.554 6.831s.506.894 1.269 1.257c.763.364 1.724-.015 2.602-.281 5.12-1.549 8.131-3.98 8.617-6.461.118-.603.216-3.158.108-6.34"/>
    <path fill="#F4900C" d="M18 4.003c-9.389 0-17 4.03-17 9 0 1.905 1.125 3.669 3.033 5.124L18 13.003l5.653 8.48C30.259 20.248 35 16.922 35 13.003c0-4.97-7.611-9-17-9"/>
    <path fill="#994500" d="M18 4.003c-8.837 0-16 3.806-16 8.5 0 1.942 1.24 3.727 3.304 5.158L18 13.003l5.042 7.563C29.405 19.443 34 16.26 34 12.503c0-4.694-7.163-8.5-16-8.5"/>
    <path fill="#662113" d="M18 4.003c-8.317 0-15.059 3.582-15.059 8 0 1.985 1.369 3.797 3.622 5.196L18 13.003l4.431 6.647c6.154-1.006 10.628-4.049 10.628-7.647 0-4.418-6.742-8-15.059-8"/>
    <path fill="#662113" d="M23.23 22.875c-.642-1.016-5.23-8.368-5.23-8.368S7.21 18.518 5.107 19.273c-.993.356-.758 3.185-.701 5.297.108 4.045.485 3.98 1.564 3.5C8.397 26.992 18 23.513 18 23.513s3.881 5.852 4.96 7.362c.394.552.737 1.247.809-2.421.042-2.112.108-4.554-.539-5.579"/>
    <path fill="#FFAC33" d="M18.112 16.114s-3.889.813-3.889 4.423c0 3.741 3.776 2.211 3.776 2.211s2.247 2.843 2.839-.356c.572-3.095-2.726-6.278-2.726-6.278"/>
    <path fill="#F4900C" d="M17.998 18.434s-1.78.265-1.78 1.942c0 1.737 1.726 1.133 1.726 1.133s1.189 1.292 1.402-.324c.212-1.602-1.348-2.751-1.348-2.751m8.576 13.432a.5.5 0 0 1-.472-.663c.476-1.381.169-7.087-.179-8.772a.498.498 0 0 1 .388-.591.495.495 0 0 1 .591.388c.299 1.445.744 7.565.146 9.302a.503.503 0 0 1-.474.336M2.517 27.659a.5.5 0 0 1-.493-.417c-.328-1.961-.179-7.172.167-8.844a.5.5 0 1 1 .979.203c-.324 1.565-.468 6.638-.16 8.475a.501.501 0 0 1-.493.583m28.156 2.373a.501.501 0 0 1-.473-.663c.477-1.381.17-7.087-.178-8.772a.498.498 0 0 1 .388-.591.498.498 0 0 1 .591.388c.299 1.446.744 7.567.145 9.302a.502.502 0 0 1-.473.336m3.183-2.804a.5.5 0 0 1-.492-.599c.352-1.758.269-6.905-.053-8.46a.498.498 0 0 1 .388-.591.504.504 0 0 1 .591.389c.345 1.667.432 6.975.055 8.859a.5.5 0 0 1-.489.402"/>
    <path fill="#994500" d="M6.375 16a.504.504 0 0 1-.312-.109c-1.808-1.444-2.625-2.966-2.429-4.524.387-3.079 4.646-5.033 4.827-5.114a.5.5 0 1 1 .411.911c-.04.018-3.931 1.806-4.247 4.329-.149 1.188.545 2.405 2.061 3.616a.5.5 0 0 1-.311.891m20.167 1.667a.501.501 0 0 1-.136-.982c.045-.012 4.469-1.294 5.104-4.289.617-2.905-3.962-5.002-4.008-5.023a.5.5 0 1 1 .41-.912c.22.099 5.358 2.458 4.576 6.144-.763 3.588-5.607 4.986-5.812 5.044a.509.509 0 0 1-.134.018m-10.44-5.795.066.003a.75.75 0 0 0 .064-1.497l-1.87-.162.747-2.672c1.775-.417 2.438-1.216 2.535-1.346a.74.74 0 0 0-.143-1.027.763.763 0 0 0-1.047.114c-.01.012-1.084 1.238-4.735.973a.75.75 0 0 0-.108 1.496c.394.029.764.042 1.112.042.27 0 .522-.01.765-.025l-.647 2.313-1.9-.165a.74.74 0 0 0-.812.682.75.75 0 0 0 .682.812l.968.084-3.492 2.747a.747.747 0 0 0-.126 1.054.749.749 0 0 0 1.053.125l2.735-2.151-.608 2.175 1.735-.637.509-1.819.737 1.363 1.423-.522-1.129-2.087zm7.624 6.623a.747.747 0 0 0 1.06-.013.75.75 0 0 0-.012-1.061c-1.564-1.526-1.815-4.857-1.818-4.891a.746.746 0 0 0-.108-.325c1.071-2.898 1.251-5.646 1.263-5.848a.75.75 0 0 0-.706-.792.743.743 0 0 0-.792.705c-.003.067-.37 5.63-3.138 8.945l.862 1.294a11.233 11.233 0 0 0 1.428-1.978c.298 1.272.87 2.899 1.961 3.964"/>
    <path fill="#994500" d="M26.671 9.842a.75.75 0 0 0-1.037-.221l-1.542 1a.75.75 0 0 0 .816 1.258l1.542-1a.75.75 0 0 0 .221-1.037m-6.752 1.388a.75.75 0 1 0 1.078-1.043l-1.291-1.333a.75.75 0 0 0-1.079 1.043z"/>
  </svg>);
exports.default = Svg1F96E;