import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-B1IbQf1h.js";import{l as o,m as g}from"./modules/unplugin-icons-B0rKZ30u.js";import{b as y,o as c,w as n,g as i,e as a,ad as s,m,v as C,x as u,D as l}from"./modules/vue-D3rFomkr.js";import{I as D}from"./slidev/default-UBrX7zFp.js";import{u as A,f as B}from"./slidev/context-BXepsdMU.js";import"./index--39zt_DE.js";import"./modules/shiki-C8idkJMZ.js";const P={__name:"openhands.md__slidev_10",setup(f){const{$clicksContext:h,$frontmatter:e}=A();return h.setup(),(b,t)=>{const k=o,r=g,p=d;return c(),y(D,C(u(l(B)(l(e),9))),{default:n(()=>[t[5]||(t[5]=i("h1",null,[i("a",{href:"https://github.com/All-Hands-AI/OpenHands",target:"_blank"},"All-Hands-AI")],-1)),i("p",null,[t[0]||(t[0]=s("|")),a(k),t[1]||(t[1]=s()),t[2]||(t[2]=i("a",{href:"https://github.com/All-Hands-AI/OpenHands/blob/dc9489ddcd7b22c164c9e66bea71626808010865/openhands/agenthub/codeact_agent/tools/bash.py",target:"_blank"},"OpenHands/openhands/agenthub/codeact_agent/tools/bash.py",-1))]),i("h3",null,[a(r,{class:"c-yellow"}),t[3]||(t[3]=s(" ReAct (Tool-use) / Structured Output"))]),t[6]||(t[6]=i("div",{class:"h-3"},null,-1)),a(p,m({lines:!0,maxHeight:"220px"},{ranges:["3-8","25-45"]}),{default:n(()=>t[4]||(t[4]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-py"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"from"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," litellm "),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ChatCompletionToolParam"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ChatCompletionToolParamFunctionChunk")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"_BASH_DESCRIPTION"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' """'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Execute a bash command in the terminal within a persistent shell session.")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"### Command Execution")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"* One command at a time: You can only execute one bash command at a time. If you need to run multiple commands sequentially, use `&&` or `;` to chain them together.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"* Persistent session: Commands execute in a persistent shell session where environment variables, virtual environments, and working directory persist between commands.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"* Timeout: Commands have a soft timeout of 120 seconds, once that's reached, you have the option to continue or interrupt the command (see section below for details)")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"### Running and Interacting with Processes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"* Long running commands: For commands that may run indefinitely, run them in the background and redirect output to a file, e.g. `python3 app.py > server.log 2>&1 &`.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"* Interact with running process: If a bash command returns exit code `-1`, this means the process is not yet finished. By setting `is_input` to `true`, you can:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  - Send empty `command` to retrieve additional logs")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  - Send text (set `command` to the text) to STDIN of the running process")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  - Send control commands like `C-c` (Ctrl+C), `C-d` (Ctrl+D), or `C-z` (Ctrl+Z) to interrupt the process")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"### Best Practices")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"* Directory verification: Before creating new directories or files, first verify the parent directory exists and is the correct location.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"* Directory management: Try to maintain working directory by using absolute paths and avoiding excessive use of `cd`.")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"### Output Handling")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"* Output truncation: If the output exceeds a maximum length, it will be truncated before being returned.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"""')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"CmdRunTool "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ChatCompletionToolParam"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    type"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"function"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    function"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"ChatCompletionToolParamFunctionChunk"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"        name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"execute_bash"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"        description"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"_BASH_DESCRIPTION"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"        parameters"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"={")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"            '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"type"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"object"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"            '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"properties"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"                '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"command"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"                    '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"type"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"string"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"                    '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"description"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"The bash command to execute. Can be empty string to view additional logs when previous exit code is `-1`. Can be `C-c` (Ctrl+C) to interrupt the currently running process. Note: You can only execute one bash command at a time. If you need to run multiple commands sequentially, you can use `&&` or `;` to chain them together."),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"                },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"                '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"is_input"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"                    '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"type"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"string"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"                    '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"description"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"If True, the command is an input to the running process. If False, the command is a bash command to be executed in the terminal. Default is False."),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"                    '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"enum"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"true"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"false"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"                },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"            },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"            '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"required"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"command"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")])])],-1)])),_:1},16),t[7]||(t[7]=i("ul",null,[i("li",null,"Bash commandを実行するTool"),i("li",null,"他にもIPythonやブラウザを使うToolなどがある")],-1))]),_:1},16)}}};export{P as default};
