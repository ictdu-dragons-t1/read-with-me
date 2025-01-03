import { useDisclosure } from "@mantine/hooks";
import { Grid, TextInput, Button, Modal } from "@mantine/core";
import bgImage from "../assets/images/alice.png";
import { useForm } from "@mantine/form";
import { useShallow } from "zustand/shallow";
import useAuthStore from "../stores/useAuthStore";

const initialForm = {
  firstName: "",
  lastName: "",
  userName: "",
};

const RegistrationModal = () => {
  const form = useForm({
    mode: "controlled",
    initialValues: initialForm,
  });

  const [opened, { close }] = useDisclosure(false);

  const { userData, isLoading, updateUser } = useAuthStore(
    useShallow((state) => ({
      userData: state.userData,
      isLoading: state.isLoading,
      updateUser: state.updateUserData,
    }))
  );

  const onClose = () => {
    if (userData) {
      close();
    }
  };

  const handleSubmit = async () => {
    await updateUser(form.values);
    close();
  };

  return (
    <Modal
      size="xl"
      opened={!userData || opened}
      radius="lg"
      onClose={onClose}
      withCloseButton={false}
      centered
      styles={{
        content: {
          background:
            " linear-gradient(180deg, rgba(20,21,44,1) 0%, rgba(58,59,91,1) 100%)",
        },
      }}
    >
      {/* <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} /> */}
      <Grid grow gutter="lg">
        <Grid.Col
          span={{ base: 12, md: 5 }}
          className="mr-10 xs:mr-2 sm:5 md:mr-10"
        >
          {/* <Image src={bgImage} alt="bgImage" fit="cover" h={400} radius='md' /> */}
          <img
            src={bgImage}
            alt="alice"
            className="object-cover h-32 w-full md:h-80 lg:h-96"
          />
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, md: 5 }}
          className="mr-10 xs:mr-2 sm:5 md:mr-10 flex justify-center items-center"
        >
          <div>
            <h1 className="text-white font-medium text-3xl md:text-4xl mb-5">
              Create an account
            </h1>
            <div className="block sm:flex gap-2 text-white w-full">
              <TextInput
                className="w-full sm:w-full mb-4"
                placeholder="First Name"
                label="First Name"
                styles={{
                  input: {
                    backgroundColor: "#2D2E4B",
                    color: "white",
                    borderColor: "#7D8694",
                  },
                }}
                key={form.key("firstName")}
                {...form.getInputProps("firstName")}
              />
              <TextInput
                className="w-full sm:w-full mb-4"
                placeholder="Last Name"
                label="Last Name"
                styles={{
                  input: {
                    backgroundColor: "#2D2E4B",
                    color: "white",
                    borderColor: "#7D8694",
                  },
                }}
                key={form.key("lastName")}
                {...form.getInputProps("lastName")}
              />
            </div>
            <TextInput
              placeholder="Username"
              label="Username"
              className="text-white mb-6"
              styles={{
                input: {
                  backgroundColor: "#2D2E4B",
                  color: "white",
                  borderColor: "#7D8694",
                },
              }}
              key={form.key("userName")}
              {...form.getInputProps("userName")}
            />
            <Button
              variant="filled"
              color="#6472D4"
              size="md"
              fullWidth
              onClick={handleSubmit}
              loading={isLoading}
              loaderProps={{ type: "dots" }}
            >
              <p className="font-semibold text-lg">Start</p>
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Modal>
  );
};

export default RegistrationModal;
