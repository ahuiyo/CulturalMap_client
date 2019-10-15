import ajax from './ajax'

const base_url = '/api'

export const requser=ajax(base_url+'/admin/usermanage',{},'GET')
