import { useEffect, useState } from "react";
import api from "../../../Utils/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import FormButton from "../../../UIComponents/FormButton";
import { toast } from "react-toastify";

function PendingReservation() {
  const [reservations, setReservations] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const getReservations = async () => {
    try {
      const response = await api.get(
        "Resturant/GetReservationsByStatus?Status=0"
      );
      setReservations(response.data);
    } catch (error) {
      console.error("Error fetching reservation count:", error);
    }
  };
  useEffect(() => {
    getReservations();
  }, []);
  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const allIds = reservations?.map((res) => res.id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };
  const handleConfirm = async (StatusType) => {
    if (selectedIds.length === 0) {
      toast.error("Please select at least one reservation!");
      return;
    }
    const combinedIds = selectedIds.join(",");
    try {
      const response = await api.post(
        `Resturant/ConfirmReservation?ReservationRequestIds=${combinedIds}&StatusType=${StatusType}`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        getReservations();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error posting reservation:", error);
    }
  };
  return (
    <div>
      <p className="pageHeader">Pending Reservations</p>
      <div className="PRbutonDiv">
        <FormButton
          text="Cancel Reservation"
          onClick={() => handleConfirm(2)}
        />
        <FormButton
          text="Confirm Reservation"
          onClick={() => handleConfirm(1)}
        />
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={
                    reservations?.length > 0 &&
                    selectedIds.length === reservations.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Reservation Date</TableCell>
              <TableCell>Reservation By</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>Offer</TableCell>
              <TableCell>Members</TableCell>
              <TableCell>Slot</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations?.map((res) => (
              <TableRow key={res.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds.includes(res.id)}
                    onChange={() => handleCheckboxChange(res.id)}
                  />
                </TableCell>
                <TableCell>{res.id}</TableCell>
                <TableCell>{res.reservationDate}</TableCell>
                <TableCell>{res.userName}</TableCell>
                <TableCell>{res.branchName}</TableCell>
                <TableCell>{res.offer}</TableCell>
                <TableCell>{res.members}</TableCell>
                <TableCell>{res.slot}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PendingReservation;
