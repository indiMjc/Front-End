// import { axiosWithAuth } from '../axiosWithAuth';

// export const FETCH_TICKETS_START;
// export const FETCH_TICKETS_SUCCESS;
// export const FETCH_TICKETS_FAIL;

// export const CREATE_TICKET_START;
// export const CREATE_TICKET_SUCCESS;
// export const CREATE_TICKET_FAIL;

// export const FILTER_TICKETS;

// export const DELETE_TICKET;


// export const fetchTickets = () => dispatch => {
//     dispatch({ type: GET_TICKETS_START })
//     axiosWithAuth()
//         .get()
//         .then(res => {
//             console.log(res)
//             dispatch({ type: GET_TICKETS_SUCCESS, payload: res})
//         })
//         .catch(err => {
//             dispatch({ type: GET_TICKETS_FAIL, payload: err})
//         })
// };

// export const createTicket = ticket => dispatch => {
//     dispatch({ type: CREATE_TICKET_START });
//     axiosWithAuth()
//         .post()
//         .then(res => {
//             console.log(res)
//             dispatch({ type: ADD_TICKET_SUCCESS, payload: res});
//         })
//         .catch(err => {
//             dispatch({ type: ADD_TICKET_FAIL, payload: err});
//         })
// };

// export const deleteTicket = id => dispatch => {
//     axiosWithAuth().delete(`??????????????/${id}`)
//     .then(() => {
//         dispatch({ type: DELETE_TICKET, payload: id })
//     })
//     .catch(err => {
//         console.log(err)
//     })
// };

// export const filterTickets = category => ({
//     type: FILTER_TICKETS,
//     payload: category
// });







