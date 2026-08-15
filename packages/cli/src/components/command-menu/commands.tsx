import type {Command} from "./types"

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversation",
        value: "/new",
        action: (ctx) => {
            ctx.toast.show({message: "Starting new conversation..."})
        }
    },
    {
        name: "agents",
        description: "Switch agents",
        value: "/agents",
    },
    {
        name: "models",
        description: "Select a different AI model",
        value: "/models",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Model",
                children: <text>Model selection not implemented yet...</text>
            })
        }
    },
    {
        name: "sessions",
        description: "Brouse previous sessions",
        value: "/sessions",
    },
    {
        name: "login",
        description: "Sign in with your browser",
        value: "/login",
    },
    {
        name: "logout",
        description: "Log out of your account",
        value: "/logout",
    },
    {
        name: "upgrade",
        description: "Buy more credits",
        value: "/upgrade",
    },
    {
        name: "usage",
        description: "Open billing portal in your browser",
        value: "/usage",
    },
    {
        name: "exit",
        description: "Quit the app",
        value: "/exit",
        action: (ctx) => {
            ctx.exit();
        }
    },
]