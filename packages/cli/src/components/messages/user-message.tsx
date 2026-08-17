

type Props = {
    message: string
}

export function UserMessage({message}: Props) {
    return (
        <box width="100%" alignItems="center">
            <box border={["left"]} borderColor="purple" width="100%">
                <box justifyContent="center" paddingX={2} paddingY={1} backgroundColor="#2e2e2e" width="100%">
                    <text>{message}</text>
                </box>
            </box>
        </box>
    )
}