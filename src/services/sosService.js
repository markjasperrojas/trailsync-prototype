let sosState = 'idle'
export const getSosState = () => sosState
export const requestSos = () => { sosState = 'confirm' }
export const sendSos = () => { sosState = 'sent' }
export const cancelSos = () => { sosState = 'idle' }
