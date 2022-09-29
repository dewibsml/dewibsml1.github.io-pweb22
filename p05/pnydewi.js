$(document).ready(function(){
  $('.top').click(function(){
      let isi = $(this).text();
      let tid = $(this).prop('id');
      let rid = tid.split('__');
      let id_baris = rid[1];
      let nama = $('#nama__'+id_baris).text();

      if(isi=='Hapus'){
          let konfirmasi = confirm(`Anda Yakin ingin menghapus..! ${nama} ??`);
          if(!konfirmasi) return;

          $('#fade__'+id_baris).fadeOut();

      }else{
          alert("Ente milih : " + $(this).html() + "!");
      }
  })
})
