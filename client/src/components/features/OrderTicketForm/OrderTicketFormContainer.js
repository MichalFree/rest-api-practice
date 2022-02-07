import { connect } from 'react-redux';
import { addSeatRequest, getRequests, getSeats, loadSeatsRequest } from '../../../redux/seatsRedux';
import OrderTicketForm from './OrderTicketForm';

const mapStateToProps = state => ({
  requests: getRequests(state),
  seats: getSeats(state),
});

const mapDispatchToProps = dispatch => ({
  addSeat: (seat) => dispatch(addSeatRequest(seat)),
  loadSeats: () => dispatch(loadSeatsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTicketForm);