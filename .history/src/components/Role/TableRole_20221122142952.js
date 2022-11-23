import React, {
    useEffect,
    useState,
    forwardRef,
    useImperativeHandle,
} from "react";
import { toast } from "react-toastify";
import { fetchAllRole, deleteRole } from "../../services/roleService";
const TableRole = forwardRef((props, ref) => {
    const [listRoles, setListRoles] = useState([]);
    const handleDeleteRole = async (role) => {
        let data = await deleteRole(role);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            await getAllRoles();
        }
    };
    useEffect(() => {
        getAllRoles();
    }, []);

    useImperativeHandle(ref, () => ({
        fetchListRolesAgain() {
            getAllRoles();
        },
    }));

    const getAllRoles = async () => {
        let data = await fetchAllRole();
        if (data && data.EC === 0) {
            setListRoles(data.DT);
        }
    };
    return (
        <>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">URL</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {listRoles && listRoles.length > 0 ? (
                        <>
                            {listRoles.map((item, index) => {
                                return (
                                    <tr key={`row-${index}`}>
                                        <td>{item.id}</td>
                                        <td>{item.url}</td>
                                        <td>{item.description}</td>

                                        <td>
                                            <span
                                                title="Delete"
                                                className="delete"
                                                onClick={() =>
                                                    handleDeleteRole(item)
                                                }>
                                                <i className="fa fa-trash-o"></i>
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            <tr>
                                <td colSpan={4}>Not Found Roles</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </>
    );
});

export default TableRole;
