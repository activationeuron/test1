import axios from 'axios';
import Vue from 'vue';
import { getToken, removeToken } from '@/utils/auth';

import Toasted from 'vue-toasted';
Vue.use(Toasted, {
    position: 'top-center',
    duration: 3000,
    keepOnHover: true,
});

import store from '@/store';

// create an axios instance
//u
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000, // request timeout
});

// request interceptor
service.interceptors.request.use(
    (config) => {
        // do something before request is sent
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['token'] = getToken();

        return config;
    },
    (error) => {
        // do something with request error
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.success) {
            return res;
        } else if (res.statusCode === -1) {
            Vue.toasted.show(res.msg || 'something went wrong', {
                //     action: [
                // {
                //     text : 'Cancel',
                //     onClick : (e, toastObject) => {
                //         toastObject.goAway(0);
                //     }
                // },
                // {
                //     text : 'Undo',
                //     // router navigation
                //     push : {
                //         name : 'somewhere',
                //         // this will prevent toast from closing
                //         dontClose : true
                //      }
                // }
                //     ]
            });
            removeToken();

            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            Vue.toasted.show(res.msg || 'Error');
            return res;
        }
    },
    (error) => {
        Vue.toasted.show(error.message);
        return Promise.reject(error);
    }
);

export default service;
