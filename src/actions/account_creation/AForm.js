import { toast } from 'react-toastify';

export function createAccount(data) {
	return function (dispatch) {
		fetch('http://localhost:3001/accounts', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
    })
    .then(
        function(resp) {
          //dispatch(updatePaymentActionCreator(data));
          toast.success("Thanks for banking with us! Your account number is TODO");
        return resp.json(); 
      }, function(resp) {
          toast.error("Something went wrong! Please try again...");
        return resp.json();
      });
    };
}