export function Header() {
    return (
        <box justifyContent="center" alignItems="center">
            <box flexDirection="row" alignItems="center" justifyContent="center" gap={0.5}>
                <ascii-font font="block" text="Astra" color="primary" />
                <ascii-font font="block" text="Code"  />
            </box>
        </box>
    )
}