(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[9873],{4327:(e,t,n)=>{"use strict";n.r(t);var s=n(6293),i=n(3571),r=n(95122),a=n(48015),c=n(87514),l=n.n(c),o=n(78930),u=n(31600),p=n(64893),m=n(71941),d=n(36713),h=n(48562),w=n(26755),v=n(67527),f=n(31511),g=n(71930);function x(e){switch(e){case"plugin":return m.Z;case"theme":return d.Z;case"wordpress":return h.Z;default:return}}function _({issue:e}){const t=(0,f.bv)("vulnerabilities",`/vulnerability/${e.id}`),n=["ithemes-security:mute-vulnerability","ithemes-security:unmute-vulnerability"];return e._links["ithemes-security:fix-vulnerability"]?n.push("ithemes-security:fix-vulnerability"):n.push("ithemes-security:deactivate-vulnerable-software"),(0,s.createElement)(o.SiteScanIssue,{key:e.id,issue:e,icon:x(e.component)},(0,s.createElement)(o.ScanIssueDetailContent,null,(0,s.createElement)(o.ScanIssueDetailColumn,null,(0,s.createElement)(g.xv,{as:"p",variant:g.rK.DARK,text:(0,r.sprintf)((0,r.__)("Vulnerable Version: %s","better-wp-security"),e.meta.details.affected_in)}),e.meta.details.fixed_in&&(0,s.createElement)(g.xv,{as:"p",variant:g.rK.DARK,text:(0,r.sprintf)((0,r.__)("Fixed Version: %s","better-wp-security"),e.meta.details.fixed_in)})),(0,s.createElement)(o.ScanIssueDetailColumn,null,(0,s.createElement)(g.xv,{text:(0,r.__)("Action Details:","better-wp-security"),weight:g.fs.HEAVY}),e.meta.details.fixed_in?(0,s.createElement)(o.ScanIssueText,null,(0,r.__)("The software needs to be updated to have the latest improvements released by the developer. ","better-wp-security"),(0,s.createInterpolateElement)((0,r.__)("View the <a>Vulnerability Details <icon/></a> for more info.","better-wp-security"),{a:(0,s.createElement)("a",{href:t,target:"_blank",rel:"noreferrer"}),icon:(0,s.createElement)(p.Icon,{icon:w.Z,size:15})})):(0,s.createElement)(o.ScanIssueText,{text:(0,s.createElement)(React.Fragment,null,"plugin"===e.component&&(0,r.__)("If no update is available, you should deactivate the plugin.","better-wp-security"),"theme"===e.component&&(0,r.__)("If no update is available, you should switch themes.","better-wp-security"))}))),(0,s.createElement)(o.SiteScanIssueActions,{issue:e,allowedActions:n}))}function E({issue:e}){return(0,s.createElement)(o.SiteScanIssue,{key:e.id,issue:e,icon:v.Z},(0,s.createElement)(o.ScanIssueDetailContent,null,(0,s.createElement)(o.ScanIssueDetailColumn,null,(0,s.createElement)(g.zx,{variant:"link",href:e.meta.link,icon:w.Z,iconPosition:"right",text:(0,r.__)("Learn more")}))))}function b(){const{issues:e}=(0,a.useSelect)((e=>({issues:e(o.store).getIssuesForComponentGroup("site-scanner")})),[]);return(0,s.createElement)(React.Fragment,null,(0,s.createElement)(o.SiteScanIssuesFill,null,e.filter((e=>!e.muted)).map((e=>"blacklist"!==e.component?(0,s.createElement)(_,{key:e.id,issue:e}):(0,s.createElement)(E,{key:e.id,issue:e})))),(0,s.createElement)(o.SiteScanMutedIssuesFill,null,e.filter((e=>e.muted)).map((e=>"blacklist"!==e.component?(0,s.createElement)(_,{key:e.id,issue:e}):(0,s.createElement)(E,{key:e.id,issue:e})))))}function y(e){switch(!0){case e<3:return"low";case e<7:return"medium";case e<9:return"high";default:return"critical"}}function S(e){const t={id:e.id,severity:y(e.details?.score),meta:e,_links:e._links};return"google"===e.id?(t.component=e.entry,t.title=e.description):(t.component=e.software.type.slug,t.title=e.software.label||e.software.slug||(0,r.__)("WordPress","better-wp-security"),t.description=e.details.type.label,t.muted="muted"===e.resolution?.slug),t}n.p=window.itsecWebpackPublicPath,(0,r.setLocaleData)({"":{}},"ithemes-security-pro"),(0,a.dispatch)(o.store).registerScanComponent({slug:"plugin",priority:15,label:(0,r.__)("Plugins","better-wp-security"),description:(0,r.__)("Check for plugins with known vulnerabilities","better-wp-security"),group:"site-scanner"}),(0,a.dispatch)(o.store).registerScanComponent({slug:"theme",priority:16,label:(0,r.__)("Themes","better-wp-security"),description:(0,r.__)("Check for themes with known vulnerabilities","better-wp-security"),group:"site-scanner"}),(0,a.dispatch)(o.store).registerScanComponent({slug:"wordpress",priority:17,label:(0,r.__)("WordPress Core","better-wp-security"),description:(0,r.__)("Check for known WordPress Core vulnerabilities","better-wp-security"),group:"site-scanner"}),(0,a.dispatch)(o.store).registerScanComponent({slug:"blacklist",priority:18,label:(0,r.__)("Google Safe Browsing","better-wp-security"),description:(0,r.__)("Check if your site is safe according to Google Safe Browsing","better-wp-security"),group:"site-scanner"}),(0,a.dispatch)(o.store).registerScanComponentGroup({slug:"site-scanner",components:["plugin","theme","wordpress","blacklist"],async execute(){const e=await(0,a.dispatch)(u.siteScannerStore).runScan(),t=(await async function(e){return l()({method:"GET",path:`/ithemes-security/v1/site-scanner/scans/${e}/issues?entry=blacklist`})}(e.id)).filter((e=>"clean"!==e.status));return(await(0,a.dispatch)(u.vulnerabilitiesStore).query("siteScanner",{resolution:["","muted"]})).concat(t).map(S)},transform:S}),(0,i.registerPlugin)("itsec-site-scanner-site-scan",{render:()=>(0,s.createElement)(b,null)})},36713:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(6293),i=n(14776);const r=(0,s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(i.Path,{d:"M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z"}))},26755:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(6293),i=n(14776);const r=(0,s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(i.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},71941:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(6293),i=n(14776);const r=(0,s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(i.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},67527:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(6293),i=n(14776);const r=(0,s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(i.Path,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"}))},48562:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(6293),i=n(14776);const r=(0,s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,s.createElement)(i.Path,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},31600:e=>{e.exports=function(){return this.itsec.packages.data}()},78930:e=>{e.exports=function(){return this.itsec.pages["site-scan"]}()},87514:e=>{e.exports=function(){return this.wp.apiFetch}()},64893:e=>{e.exports=function(){return this.wp.components}()},9576:e=>{e.exports=function(){return this.wp.compose}()},48015:e=>{e.exports=function(){return this.wp.data}()},82521:e=>{e.exports=function(){return this.wp.date}()},6293:e=>{e.exports=function(){return this.wp.element}()},95122:e=>{e.exports=function(){return this.wp.i18n}()},81019:e=>{e.exports=function(){return this.wp.keycodes}()},3571:e=>{e.exports=function(){return this.wp.plugins}()},14776:e=>{e.exports=function(){return this.wp.primitives}()},73470:e=>{e.exports=function(){return this.wp.url}()},99196:e=>{"use strict";e.exports=window.React},92819:e=>{"use strict";e.exports=window.lodash}},e=>{e.O(0,[1930,5307,1511],(()=>(4327,e(e.s=4327))));var t=e.O();((window.itsec=window.itsec||{})["site-scanner"]=window.itsec["site-scanner"]||{})["site-scan"]=t}]);