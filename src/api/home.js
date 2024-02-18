import http from '@/utils/http'

export function getData(params) {
    return http.get('/api/get_user', params);
}