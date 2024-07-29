import {useState} from 'react'
import {UnlockContainer, Img, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLockStatus] = useState(false)
  const toggleStatus = () => {
    setLockStatus(prevState => !prevState)
  }
  return (
    <UnlockContainer>
      {lockStatus ? (
        <Img
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      ) : (
        <Img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      )}
      <Heading as="p">
        {lockStatus ? 'Your Device is Unlocked' : 'Your Device is Locked'}
      </Heading>
      <Button type="button" onClick={toggleStatus}>
        {lockStatus ? 'Lock' : 'Unlock'}
      </Button>
    </UnlockContainer>
  )
}

export default Unlock
