import MuiAvatar from '@mui/material/Avatar'
import { Box } from '@mui/material'

const Avatar = ({ avatarURL }) => {

  return (
    <Box maxWidth={144}>
      <MuiAvatar
        src={avatarURL}
      >
      </MuiAvatar>
    </Box>
  )
}


export default Avatar
