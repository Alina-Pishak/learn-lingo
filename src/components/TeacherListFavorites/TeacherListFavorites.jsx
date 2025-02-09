import { useGetTeachersQuery } from "../../redux/teachers/teachers";
import { Button } from "../Button/Button.styled";
import TeacherListItem from "../TeacherListItem/TeacherListItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ITEMS_PER_PAGE = 4;

const TeacherListFavorites = () => {
  const { favorites } = useSelector((state) => state.favorites);

  const [allItems, setAllItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);

  const { data } = useGetTeachersQuery();
  useEffect(() => {
    if (data) {
      setAllItems(data.filter((teacher) => favorites.includes(teacher._id)));
      setLoading(false);
    }
  }, [data, favorites]);

  const loadMoreItems = () => {
    if (loading) return;

    setLoading(true);

    setItemsToShow((prevItemsToShow) => prevItemsToShow + ITEMS_PER_PAGE);

    setLoading(false);
  };
  return (
    <div style={{ paddingTop: "96px" }}>
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

export default TeacherListFavorites;
