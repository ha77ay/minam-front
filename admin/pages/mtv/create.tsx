

const MtvCreate = () => {
  return (
    <section style={{ width: "40vw", marginTop: "10vh" }} className="mx-auto">
      <h2 className="text-center">신규 콘텐츠 등록</h2>
      <form>
        <table className="table">
          <tbody>
            <tr>
              <th>제목</th>
              <td>
                <input className="form-control" type="text" />
              </td>
            </tr>
            <tr>
              <th>설명</th>
              <td>
                <textarea
                  className="form-control"
                  style={{ height: "30vh" }}
                ></textarea>
              </td>
            </tr>
            <tr>
              <th>동영상</th>
              <td>
                <input className="form-control" type="file" accept="video/*" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div>
        <button
          className="btn btn-secondary float-start"
          onClick={() => {
            // router.push("/photos");
          }}
        >
          <i className="bi bi-grid-3x3-gap me-1"></i>
          목록
        </button>
        <button
          className="btn btn-primary float-end"
          onClick={() => {
            // handleAddClick();
          }}
        >
          <i className="bi bi-check" />
          저장
        </button>
      </div>
    </section>
  );
};

export default MtvCreate;
