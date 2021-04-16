import { formatToTimeZone } from 'date-fns-timezone'

const FORMAT = 'YYYY-MM-DD'
const TIME_ZONE_TOKYO = 'Asia/Tokyo'

const getCurrentDateInTokyo = () => {
  const date = new Date()
  return formatToTimeZone(date, FORMAT, { timeZone: TIME_ZONE_TOKYO })
}

export default (dummy, inject) => {
  inject('now', () => getCurrentDateInTokyo())
}

export { getCurrentDateInTokyo }
