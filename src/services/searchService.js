import * as httpRequest from '~/untils/httpRequest';

export const search = async (q, type = 'less', page = null) => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
};
