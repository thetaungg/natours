import React from "react";
import './section-booking.styles.scss';
import BookingForm from "../../components/booking-form/booking-form.component";

const BookingSection = () => (
        <section className="section-booking">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <BookingForm/>
                    </div>
                </div>
            </div>
        </section>
);

export default BookingSection;