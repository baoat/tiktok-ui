import * as request from '~/utils/httprequest';

export const accounts = async (q = 'h', type = 'less') => {
  try {
    const res = await request.get(`users/search`, {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
