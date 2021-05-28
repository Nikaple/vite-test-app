import { concat } from './util'

export const fingerprint = () => {
    return concat('aaa', 'bbb')
}

window.fingerprint = fingerprint;