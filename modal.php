<?php include 'includes/header.php'; ?>


<!-- Modal -->


        <div class="modal fade  mod-fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered mod-cen ">
                <div class="modal-content login_modal">
                    <div class="log_modal_div">
                        <img src="assets/images/popup-mark.png" alt="" width="72" height="72">
                    </div>
                    <div class="mod-text">
                      <h2 class="log_modal_head" id="exampleModalLabel">Check your email</h2>
                      <p class="log_modal_p">We sent a link to john@example.com. Open it to verify your account and log in.</p>
                    </div>
                    <a class="btn log_btn w-100" href="index.php">Close</a>
                </div>
            </div>
        </div>

<script>
  document.querySelector('[data-auth="sign-up"]').addEventListener('submit', function (event) {
    event.preventDefault();

    var modalElement = document.getElementById('exampleModal');
    if (!modalElement || !window.bootstrap || !window.bootstrap.Modal) {
      throw new Error('Bootstrap 5 modal is unavailable.');
    }
    window.bootstrap.Modal.getOrCreateInstance(modalElement).show();
  });
</script>
<?php include 'includes/footer.php'; ?>