# discord-notify

Github Action that simply send messages to Discord.

## Example usage

```yaml
uses: pahud/discord-notify@main
with:
  webhook: ${{ secrets.WEBHOOK }}
  message: "Hello there!!"
```