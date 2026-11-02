import { Button } from 'react-bootstrap'

export default  function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const bootstrapVariant = {
    primary: "dark",
    secondary: "outline-dark",
    light: "light",
  }[variant]

  return (
    <Button
      as="a"
      variant={bootstrapVariant}
      className={`button button--${variant} ${className}`}
      href={href}
    >
      {children}
    </Button>
  )
}