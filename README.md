# discord-notify

Github Action that simply send messages to Discord.

## Example usage

```yaml
uses: pahud/discord-notify@main
with:
  webhook: ${{ secrets.WEBHOOK }}
  message: "Hello there!!"
```

## Development

Run `yarn watch` to compile `src/index.ts` to `lib/index.js`.

Run `npx projen github:build` to build it up with ncc into `dist/index.js`.