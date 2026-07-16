import { BattleOfCell } from "./bundle"

type RespError = BattleOfCell.Message.RespError

/**
 * 格式化 RespError 消息。
 * message 为格式化字符串（支持 %d / %f / %s / %%），args 为后续参数。
 */
export function formatRespError(error: RespError): string {
  let msg = error.message ?? ""
  const args = error.args ?? []
  let argIndex = 0

  return msg.replace(/%(d|f|s|%)/g, (_, specifier: string) => {
    if (specifier === "%") return "%"

    const arg = args[argIndex++]
    if (arg === undefined || arg === null) return "?"

    switch (specifier) {
      case "d":
        return String(parseInt(arg, 10) || 0)
      case "f":
        return String(parseFloat(arg) || 0)
      case "s":
        return arg
      default:
        return arg
    }
  })
}
