import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ErrorMessage } from "../components/messages/error-message";
import { SessionShell } from "../components/session-shell";
import { BotMessage, UserMessage } from "../components/messages";

export function NewSession() {
    const navigate = useNavigate()
    const location = useLocation()

    const state = location.state as {message?: string} | null

    useEffect(() => {
        if(!state?.message) {
            navigate("/", {replace:true})
        }
    }, [state, navigate])

    if(!state?.message) return null

    return (
        <SessionShell onSubmit={() => {}} inputDisabled loading>
            <UserMessage message={state.message} />
            <BotMessage content="This is a sample bot message." model="gemini-3.6-flash" />
            <ErrorMessage message="Sample Error" />
        </SessionShell>
    )
}