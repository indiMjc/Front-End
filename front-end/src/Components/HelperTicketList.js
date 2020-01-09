import React, { useEffect, useState } from "react";
import UserTicketCard from "../Components/UserTicketCard";
import axiosWithAuth from "../Helpers/axiosWithAuth";

function UserTicketCards() {
  const [userTicket, setUserTicket] = useState([]);

  const deleteCard = id => {
    const NewUser = userTicket.filter(card => card.id !== id);
    setUserTicket(NewUser);
  };

  useEffect(() => {
    axiosWithAuth()
      .get("https://infinite-taiga-63738.herokuapp.com/api/tickets") //API Goes Here
      .then(res => {
        console.log("https://infinite-taiga-63738.herokuapp.com/api/tickets", res);
        setUserTicket(res.data.tickets);
      })
      .catch(error => {
        console.log("None for You", error);
      });
  }, []); // LEAVE THE BRACKETS WHERE PLACE, UNLESS YOU WANT AN INFINITE LOOP

  console.log(userTicket);

  return (
    <section className='user-ticket-list'>
      <UserTicketCard cardList={userTicket} deleteCard={deleteCard} />
    </section>
  );
}

export default UserTicketCards;