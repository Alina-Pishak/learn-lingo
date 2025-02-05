import { useGetTeachersQuery } from "../../redux/teachers/teachers";
import { Button } from "../Button/Button.styled";
import TeacherListItem from "../TeacherListItem/TeacherListItem";
import Filters from "../Filters/Filters";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 4;

const TeacherList = () => {
  const [filters, setFilters] = useState({
    language: "",
    level: "",
    price: null,
  });
  const [allItems, setAllItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);

  const { data } = useGetTeachersQuery();
  useEffect(() => {
    if (data) {
      setAllItems(data);
      setLoading(false);
    }
    if (Object.values(filters).some((filter) => filter)) {
      setItemsToShow(ITEMS_PER_PAGE);
      setAllItems((prev) =>
        prev.filter((teacher) => {
          const matchesLanguage =
            !filters.language || teacher.languages.includes(filters.language);
          const matchesLevel =
            !filters.level || teacher.levels.includes(filters.level);
          const matchesPrice =
            !filters.price || teacher.price_per_hour === filters.price;
          return matchesLanguage && matchesLevel && matchesPrice;
        })
      );
    }
  }, [data, filters]);

  const loadMoreItems = () => {
    if (loading) return;

    setLoading(true);

    setItemsToShow((prevItemsToShow) => prevItemsToShow + ITEMS_PER_PAGE);

    setLoading(false);
  };
  return (
    <div>
      <Filters setFilters={setFilters} filters={filters} />
      {allItems.length > 0 && (
        <ul className="teachers-container">
          <TeacherListItem teachers={allItems.slice(0, itemsToShow)} />
        </ul>
      )}
      {allItems.length && allItems.length > itemsToShow && (
        <Button
          type="button"
          onClick={loadMoreItems}
          disabled={loading}
          style={{ margin: "0 auto" }}
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
};

export default TeacherList;
