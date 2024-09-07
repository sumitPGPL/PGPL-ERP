import DefaultLayout from "@/components/Layouts/DefaultLayout";
import StudentCard from "@/components/StudentCard/StudentCard";
import StudentTable from "@/components/StudentTable/StudentTable";


const Home: React.FC = () => {
  return (
    <div>
        <DefaultLayout>
      <StudentTable />
      <StudentCard/>
      </DefaultLayout>
    </div>
  );
};

export default Home;
