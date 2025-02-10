import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useGetTeachersQuery } from "../../redux/teachers/teachers";

import Button from "../ui/Button/Button";
import TeacherListItem from "../TeacherListItem/TeacherListItem";
import Filters from "../Filters/Filters";

const ITEMS_PER_PAGE = 4;

const TeacherList = () => {
  const { favorites } = useSelector((state) => state.favorites);
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
      <ul className="teachers-container">
        {allItems.length > 0 &&
          allItems
            .slice(0, itemsToShow)
            .map((teacher) => (
              <TeacherListItem
                key={teacher._id}
                teacher={teacher}
                favorites={favorites}
              />
            ))}
      </ul>
      {allItems.length && allItems.length > itemsToShow && (
        <Button onClick={loadMoreItems} disabled={loading} variant="teachers">
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
};

export default TeacherList;
