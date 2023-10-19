import React, { useState } from "react";
import { Modal, message } from "antd";
import FormDatePicker from "../Forms/FormDatePicker";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import { getUserInfo } from "@/services/auth.service";
import FormSelectField from "../Forms/FormSelectField";
import { shifts } from "@/constants/global";
import { useAddBookingMutation } from "@/redux/api/bookingApi";
import { useRouter } from "next/navigation";

type FormValues = {
  date: string;
  shift: string;
};
interface IModal {
  isModalOpen: boolean;
  handleCancel: () => void;
  setIsModalOpen?: any;
  showCancelButton?: boolean;
  showOkButton?: boolean;
  serviceId?: number;
}
const BookingModal = ({
  isModalOpen,
  setIsModalOpen,
  handleCancel,
  serviceId,
}: IModal) => {
  const router = useRouter();
  const [addBooking] = useAddBookingMutation();
  const today = new Date().toISOString().slice(0, 10);
  const [shift, setShift] = useState("");
  const [date, setDate] = useState(today || undefined);
  const { id } = getUserInfo() as any;
  const handleOk = async () => {
    try {
      const booking = await addBooking({
        date,
        shift,
        serviceId: Number(serviceId),
        userId: Number(id),
      }).unwrap();
      console.log(booking.data);
      message.success("Booking Successful");
    } catch (error: any) {
      console.log(error);
      message.error(error?.data?.message || "Something went wrong");
    }
    setIsModalOpen(false);
  };

  if (isModalOpen) {
    if (!id) {
      router.push("/login");
    }
  }
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {};
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form submitHandler={onSubmit}>
          <FormDatePicker
            name="date"
            label="Select Booking Date"
            onChange={(e) => setDate(e?.format("YYYY-MM-DD"))}
          />
          <FormSelectField
            name="shift"
            options={shifts}
            label="Select Your Schedule Schedule"
            handleChange={(e) => setShift(e)}
          />
        </Form>
      </Modal>
    </>
  );
};

export default BookingModal;
