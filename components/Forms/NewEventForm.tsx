import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Input from "@/components/Forms/Input";
import dayjs from "dayjs";
import request from "graphql-request";
import { ADD_NEW_EVENT, FETCH_ALL_EVENTS } from "@/utils/graphql";
import useSWR from "swr";

type FormValues = {
  title: string;
  start: string;
  end: string;
};

const addNewEvent = (variables) => {
  return request("/api/graphql", ADD_NEW_EVENT, variables);
};

interface INewEventForm {
  close: () => void;
}

export default function NewEventForm({ close }: INewEventForm) {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useSWR(FETCH_ALL_EVENTS); // the mutate function will do the refetching for us

  // convert html time
  // find difference of date in minutes
  const timeSelected = (time: string) => {
    const startOfToday = dayjs().startOf("date");

    const today = new Date();
    const timeStamp = new Date(today.toDateString() + " " + time);

    return dayjs(timeStamp).diff(startOfToday, "minutes");
  };

  const methods = useForm<FormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true);
      const { title, start, end } = data;

      const startMinutes = timeSelected(start);
      const endMinutes = timeSelected(end);

      await addNewEvent({ title, start: startMinutes, end: endMinutes });
      mutate();
      close();
    } catch (error) {
      console.log("****** error is:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            disabled={isLoading}
            id="title"
            label="Title"
            validation={{
              required: "Title is required",
            }}
          />
          <div className="flex items-center space-x-2">
            <Input
              disabled={isLoading}
              type="time"
              id="start"
              label="Start time"
              validation={{
                required: "Start time is required",
              }}
            />
            <Input
              disabled={isLoading}
              type="time"
              id="end"
              label="End time"
              validation={{
                required: "End time is required",
              }}
            />
          </div>

          <button className={`bg-blue-700 text-white p-4 my-6`} type="submit">
            {isLoading ? "Loading... " : "Save"}
          </button>
        </form>
      </FormProvider>
    </>
  );
}
