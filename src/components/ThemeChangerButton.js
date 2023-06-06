import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

const ThemeChangeButton = () => {
  const { setTheme } = useNextTheme('light');
  const { isDark, type } = useTheme();

  return (
    <div>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onClick={() => setTheme('light')}
      />
    </div>
  )
}

export default ThemeChangeButton